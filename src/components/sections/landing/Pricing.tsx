import Image, { type StaticImageData } from "next/image";
import defaultIcon from "~/../public/icons/default-card.png";
import googleIcon from "~/../public/icons/google-card.png";
import worldCoinIcon from "~/../public/icons/worldcoin-card.png";

const PRICING_CARDS = [
  {
    title: "WorldCoin",
    description: "Accounts created using WorldCoin are eligible for 50 free messages.",
    icon: worldCoinIcon as StaticImageData,
  },
  {
    title: "Google",
    description: "Accounts created using WorldCoin are eligible for 15 free messages.",
    icon: googleIcon as StaticImageData,
  },
  {
    title: "Anonymous",
    description: "You can remain fully anonymous, but there is no free quota.",
    icon: defaultIcon as StaticImageData,
  },
];

export default function Pricing() {
  return (
    <section className="mx-container text-center">
      <h1 className="mb-8 font-display text-5xl font-bold text-white xl:text-6xl">
        Pricing
      </h1>
      
      <p className="mb-6 text-beige md:text-lg xl:mb-6">
        There are 3 different methods you can use to{" "}
        <span className="text-gradient">
          create an account
        </span>.
      </p>
      <div className="flex flex-wrap justify-center gap-12 ">
        {PRICING_CARDS.map((card) => (
          <div
            className="w-[300px] overflow-hidden rounded-4xl border border-purple2 px-4 text-center"
            key={card.title}
          >
            <Image src={card.icon} alt={card.title} className="inline-block" />
            <h2 className="mb-2 mt-6 font-display text-4xl font-bold text-white">
              {card.title}
            </h2>
            <p className="mb-8 text-beige">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
