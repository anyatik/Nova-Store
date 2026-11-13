import { ArrowRight, Check } from "lucide-react";
import { Button } from "../shared/Button";
import { Badge } from "../shared/Badge";

export const HeroBanner = () => {
  return (
    <div className="bg-hero flex flex-col my-7 rounded-4xl p-14 gap-6 ">
      <Badge withDot dotClassName="bg-lime" variant="lime-outline">
        новая коллекция 2026
      </Badge>
      <h1 className="text-6xl font-bold text-surface w-125">
        Техника, которая держит темп
      </h1>
      <p className="text-4 text-text-on-dark-soft w-117">
        Смартфоны, ноутбуки и звук без компромиссов. Подберём технику под твой
        ритм-доставим уже завтра.
      </p>
      <div className="flex gap-2">
        <Button className="border-lime text-ink! bg-lime font-bold rounded-full px-6 py-4.5">
          Смотреть каталог <ArrowRight className="size-4" />
        </Button>
        <Button className="border-surface/20 bg-surface/5 text-surface rounded-full px-6 py-4.5">
          Хиты недели
        </Button>
      </div>
      <div className="flex flex-row text-text-disabled gap-2 text-xs items-center">
        <Check className="text-lime size-4" /> <p>Гарантия 2 года</p>
        <Check className="text-lime size-4" /> <p>Доставка завтра</p>
        <Check className="text-lime size-4" /> <p>Возврат 14 дней</p>
      </div>
    </div>
  );
};
