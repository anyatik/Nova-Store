// variant = "primary" | "secondary"
import cn from "classnames";

export const Input = (props) => {
  const {
    placeholder,
    variant = "secondary",
    isError,
    icon,
    type,
    iconLeft,
  } = props;

  return (
    <div
      className={cn(
        "border border-border p-3  rounded-[10px] h-11 flex items-center gap-2  text-xs",
        variant === "primary" ? " bg-surface" : " bg-canvas ",
        isError && "border-danger",
      )}
    >
      {icon ? icon : null}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-ink outline-none border-none focus:ring-0"
      />
      {iconLeft ? iconLeft : null}
    </div>
  );
};
