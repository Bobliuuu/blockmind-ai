import Link from "next/link";

interface ButtonProps {
  type: "button" | "submit" | "route" | "link";
  hierarchy: "primary" | "secondary" | "tertiary";
  route?: string;
  link?: string;
  onClick?: () => void;
  font?: string;
  bg?: string;
  border?: string;
  padding?: string;
  icon?: string;
  disabled?: boolean;
  classes?: string;
  children: React.ReactNode;
}

export default function Button({
  type,
  hierarchy,
  route,
  link,
  onClick,
  font,
  bg,
  border,
  padding = "py-3 px-5",
  icon,
  disabled,
  classes,
  children,
}: ButtonProps) {
  let buttonClasses = `transition-300 inline-block text-center rounded-full 
                         ${font || ""} ${bg || ""} ${border || ""} 
                         ${padding || ""} ${classes || ""} 
                         ${
                           disabled
                             ? "opacity-50 cursor-default"
                             : "cursor-pointer"
                         }`;

  if (hierarchy === "primary") {
    buttonClasses += " bg-gradient text-black";
  } else if (hierarchy === "secondary") {
    buttonClasses += " bg-black text-white border border-purple2";
  } else if (hierarchy === "tertiary") {
    buttonClasses += " text-gradient";
  }

  const buttonIcon = icon && (
    <div className="absolute right-5 top-1/2 -translate-y-1/2">{icon}</div>
  );

  switch (type) {
    case "button":
      return (
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={buttonClasses}
        >
          {children}
          {buttonIcon}
        </button>
      );
    case "submit":
      return (
        <button type="submit" disabled={disabled} className={buttonClasses}>
          {children}
          {buttonIcon}
        </button>
      );
    case "route":
      return (
        <Link href={route || ""} className={buttonClasses}>
          {children}
          {buttonIcon}
        </Link>
      );
    case "link":
      return (
        <a
          href={link || ""}
          target="_blank"
          rel="noreferrer"
          className={buttonClasses}
        >
          {children}
          {buttonIcon}
        </a>
      );
    default:
      return null;
  }
}
