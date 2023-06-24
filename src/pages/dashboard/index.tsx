import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { Send, User } from "react-feather";
import logo from "~/../public/icons/logo.svg";
import { COLORS } from "~/constants/colors";
import axios from "axios";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get("/api/messages");
      setMessages(response.data as string[]);
    };

    void fetchMessages();
  }, []);

  const handleSendMessage = async () => { 
    setMessages((prev) => [...prev, input]); // user input
    var response = await axios.post("/api/chat", { data: input });
    setMessages((prev) => [...prev, response.data as string]); // AI output
    setInput("");
    response = await axios.post("/api/save", { data: messages });
  };

  return (
    <div className="h-100dvh relative flex flex-col overflow-y-hidden">
      <div
        ref={chatRef}
        className="no-scrollbar flex-grow overflow-y-scroll pb-44 pt-32"
      >
        <div className="mx-5 grid gap-7 xs:mx-7 lg:mx-auto lg:max-w-[720px] xl:gap-9">
          {messages.map((message, i) => (
            <div className="flex gap-4 xl:gap-10" key={i}>
              {i % 2 === 0 ? (
                <Image
                  src={logo as StaticImageData}
                  alt="logo"
                  className="w-6 flex-shrink-0 xl:w-7"
                />
              ) : (
                <User
                  size={48}
                  color={COLORS.blue}
                  className="w-6 flex-shrink-0 xl:w-7"
                />
              )}
              <div className="rounded-sm border border-purple2 px-4 py-3 2xl:rounded-lg 2xl:px-5 2xl:py-4">
                <p className="leading-loose text-white">{message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-9 mx-5 flex xs:mx-7 lg:mx-auto lg:max-w-[720px] xl:bottom-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSendMessage();
          }}
          className="relative flex-grow"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-full rounded-md border border-purple2 bg-purple3 py-4.5 pl-5 pr-11 text-white outline-none placeholder:text-white placeholder:opacity-60"
            placeholder="Type your message here..."
          />
          <div
            onClick={() => void handleSendMessage()}
            className="transition-300 absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-content-center rounded-sm hover:bg-white hover:bg-opacity-10"
          >
            <Send size={20} color={COLORS.white} className="opacity-60" />
          </div>
        </form>
      </div>
    </div>
  );
}
