// variant = "primary" | "secondary"
import cn from "classnames";

export const Input = (props) => {
  const { placeholder, variant = "secondary", isError, icon } = props;

  return (
    <div
      className={cn(
        "border border-border p-3  rounded-[10px] h-11 flex items-center gap-2 w-62 text-xs",
        variant === "primary" ? " bg-surface" : " bg-canvas ",
        isError && "border-danger",
      )}
    >
      {icon ? icon : null}
      <input placeholder={placeholder} />
    </div>
  );
};
