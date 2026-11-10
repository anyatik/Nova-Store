import { Dot, Heart, ShoppingBag, Star } from "lucide-react";
import { IconButton } from "../shared/IconButton";
import { Badge } from "../shared/Badge";

const badgesVariants = {
  hit: { label: "Хит", variant: "lime" },
  sale: { label: "Sale", variant: "lime" },
  new: { label: "New", variant: "primary" },
};

export const ProductCard = ({ data }) => {
  const {
    imageUrl,
    brand,
    title,
    raiting,
    reviewsCount,
    stock,
    price,
    oldPrice,
    badges,
  } = data;

  const firstBadge = badges[0];
  return (
    <div className="flex flex-col bg-surface rounded-3xl  border border-border flex-1">
      <div className=" h-52.5 rounded-t-3xl overflow-hidden flex justify-end relative">
        <Badge
          className="absolute left-4 top-4"
          variant={badgesVariants[firstBadge].variant}
        >
          {badgesVariants[firstBadge].label}
        </Badge>
        <img className="w-full h-full object-cover" src={imageUrl} />
        <IconButton
          variant="secondary"
          size="sm"
          className="rounded-full absolute right-4 top-4"
        >
          <Heart />
        </IconButton>
      </div>
      <div className="flex flex-col gap-1.5 p-4.5 flex-1 ">
        <p className="text-[11px] text-muted">{brand}</p>
        <p className="text-base text-ink">{title}</p>
        <div className="flex items-center gap-1 text-xs">
          <Star className="text-warning size-3" />
          <div className="font-bold">{raiting} </div>
          <div className="text-muted">({reviewsCount})</div>
        </div>

        <div className="flex flex-row text-xs text-muted items-center">
          в наличии <Dot /> {stock} шт.
        </div>
        <div className="flex justify-between mt-auto items-end">
          <div className=" flex flex-col">
            <p className="font-bold text-xl">{price} ₽</p>
            <p className="text-muted text-xs">
              {oldPrice ? (
                <span className="line-through">{oldPrice} ₽</span>
              ) : (
                "Бесплатная доставка"
              )}
            </p>
          </div>
          <IconButton size="sm">
            <ShoppingBag />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
