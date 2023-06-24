interface InputFeedbackProps {
  state: "success" | "error";
  children: React.ReactNode;
}

export default function InputFeedback({ state, children }: InputFeedbackProps) {
  return (
    <div className="mt-2 text-left md:mt-3">
      <p
        className={`leading-relaxed ${
          state === "success" ? "text-green1" : "text-red1"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
