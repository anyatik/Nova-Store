import { cva } from "class-variance-authority";
import cn from "classnames";

const filterChipVariants = cva(
  "flex rounded-full text-ink text-xs border py-2.5 px-3.5 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-canvas-subtle border-canvas-subtle",
        outline: "bg-surface border-border",
      },
      isSelected: {
        true: "bg-ink! text-surface border-ink",
        false: null,
      },
    },
    defaultVariants: { variant: "primary", isSelected: false },
  },
);

export const FilterChips = (props) => {
  const { data = [], variant, className, onClick, value } = props;
  return (
    <div className={cn("flex flex-row gap-2", className)}>
      {data.map((item) => (
        <div
          key={item.value}
          onClick={() => onClick(item.value)}
          className={filterChipVariants({
            variant,
            isSelected: value === item.value ? true : false,
          })}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
