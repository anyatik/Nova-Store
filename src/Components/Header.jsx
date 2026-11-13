import { Link } from "react-router";
import { Input } from "../shared/Input";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { IconButton } from "../shared/IconButton";
import { Button } from "../shared/Button";

export const Header = () => {
  return (
    <div className="flex h-20 px-16 items-center">
      <div className="flex gap-10 items-center ">
        <Link to="/">
          <img className="w-26 h-8" src="/nova-logo.png" />
        </Link>
        <p>Каталог</p>
        <p>Новинки</p>
        <p>Скидки</p>
        <p>О нас</p>
      </div>
      <div className="flex gap-2.5 ml-auto">
        <Input
          icon={<Search className="text-muted size-4" />}
          placeholder="Поиск по каталогу "
          variant="primary"
        />
        <IconButton variant="secondary">
          <Heart />
        </IconButton>
        <IconButton variant="secondary">
          <User />
        </IconButton>
        <Button className="bg-ink border-ink">
          <ShoppingBag className="size-4" />
          Корзина
          <div className="rounded-full bg-lime size-4 text-ink text-[10px] font-bold flex justify-center items-center">
            3
          </div>
        </Button>
      </div>
    </div>
  );
};
