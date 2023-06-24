interface TextInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  padding?: string;
  icon?: React.ReactNode;
  iconOnClick?: () => void;
  classes?: string;
}

export default function TextInput({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  padding = "px-5 py-4.5",
  icon,
  iconOnClick,
  classes,
}: TextInputProps) {
  return (
    <div className={`relative ${classes || ""}`}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`transition-300 inline-block w-full rounded-md border border-purple2 bg-purple3 text-white outline-none placeholder:text-beige placeholder:opacity-70 ${padding} ${
          icon ? "pr-14" : ""
        }`}
      />
      {icon && (
        <button
          type="button"
          onClick={iconOnClick}
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {icon}
        </button>
      )}
    </div>
  );
}
