import cn from "classnames";
import { cva } from "class-variance-authority";

const variants = cva(
  "flex items-center justify-center border rounded-[10px] size-11",
  {
    variants: {
      variant: {
        primary: "border-accent text-surface bg-accent",
        secondary:
          "border-border bg-surface text-ink hover:bg-canvas-subtle hover:border-border-strong active:bg-disabled active:border-border-strong",
        ghost: "border-none bg-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export const IconButton = (props) => {
  const { children, variant, className } = props;

  return (
    <button className={variants({ variant, className })}>{children}</button>
  );
};
