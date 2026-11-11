import { ArrowRight } from "lucide-react";
import { Button } from "../shared/Button";

export const PromoBanner = () => {
  return (
    <div className="flex p-10 rounded-3xl bg-lime mb-10">
      <div className="flex flex-col gap-4 w-140">
        <p className="font-bold text-[11px] text-lime-ink uppercase">
          Собери свой сетап
        </p>
        <div className="font-bold text-4xl text-ink">
          <h2>Ноутбук + аксессуары</h2>
          <h2>Минус 15% на комплект</h2>
        </div>
        <p className="text-sm text-lime-ink">
          Клавиатура, мышь и подставка — всё, чтобы работать быстрее. Скидка
          применяется автоматически.
        </p>
        <Button className="bg-ink border border-ink text-sm py-4 px-5 rounded-full w-max">
          Собрать комплект <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};
