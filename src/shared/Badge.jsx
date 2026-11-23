import { cva } from "class-variance-authority";
import { Dot } from "lucide-react";

const badgeVariants = cva(
  "rounded-full flex flex-row items-center w-max uppercase text-xs font-bold gap-2",
  {
    variants: {
      variant: {
        lime: "bg-lime text-ink",
        primary: "text-accent-pressed bg-accent-soft",
        "primary-re": "bg-accent-pressed text-accent-soft",
        error: "text-danger bg-danger-soft",
        outline: "text-ink bg-border",
        "lime-outline": "text-lime bg-surface/8 border border-surface/15",
        "lime-ink": "bg-lime-soft text-xs text-lime-ink",
        warning: "bg-warning text-ink",
      },
      size: {
        small: "px-2 py-1",
        medium: "px-[10px] py-[5px]",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
  },
);

const dotVariants = cva("rounded-full size-2 flex", {
  variants: {
    variant: {
      lime: "bg-ink",
      primary: "bg-accent-pressed",
      error: "bg-danger",
      outline: "bg-ink",
      "lime-outline": "bg-lime",
      "lime-ink": "bg-lime-ink size-1",
      warning: "bg-ink",
      "primary-re": "bg-accent-soft",
    },
  },
  defaultVariants: { variant: "primary" },
});

export const Badge = (props) => {
  const { variant, size, children, className, dotClassName, withDot } = props;
  return (
    <div className={badgeVariants({ variant, size, className })}>
      {withDot ? (
        <div className={dotVariants({ variant, className: dotClassName })} />
      ) : null}
      {children}
    </div>
  );
};
