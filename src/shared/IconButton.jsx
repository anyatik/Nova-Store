import cn from "classnames";
import { cva } from "class-variance-authority";

const variants = cva("flex items-center justify-center border rounded-[10px]", {
  variants: {
    variant: {
      primary: "border-accent text-surface bg-accent",
      secondary:
        "border-border bg-surface text-ink hover:bg-canvas-subtle hover:border-border-strong active:bg-disabled active:border-border-strong",
      ghost: "border-none bg-none",
    },
    size: {
      sm: "size-9 [&_svg:not([class*='size-'])]:size-4",
      default: "size-11 [&_svg:not([class*='size-'])]:size-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export const IconButton = (props) => {
  const { children, variant, className, size } = props;

  return (
    <button className={variants({ variant, className, size })}>
      {children}
    </button>
  );
};
