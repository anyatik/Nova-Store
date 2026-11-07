import { cva } from "class-variance-authority";
import cn from "classnames";

const variants = cva(
  "flex items-center justify-center border rounded-[10px] px-3 gap-2",
  {
    variants: {
      variant: {
        primary: "border-accent text-surface bg-accent",
        secondary: "border-border bg-surface text-ink",
        ghost: "border-none bg-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export const Button = (props) => {
  const { children, variant, className } = props;

  return (
    <button className={cn(variants({ variant }), className)}>{children}</button>
  );
};
