import { cva } from "class-variance-authority";
import cn from "classnames";

const variants = cva(
  "flex items-center justify-center border rounded-[10px] px-3 gap-2",
  {
    variants: {
      variant: {
        primary:
          "border-accent text-surface bg-accent hover:bg-accent-hover active:bg-accent-pressed",
        secondary: "border-border bg-surface text-ink",
        ghost: "border-none bg-none cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export const Button = (props) => {
  const { children, variant, className, onClick } = props;

  return (
    <button onClick={onClick} className={cn(variants({ variant }), className)}>
      {children}
    </button>
  );
};
