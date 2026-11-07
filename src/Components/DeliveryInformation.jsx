import { Dot, Van } from "lucide-react";

export const DeliveryInformation = () => {
  return (
    <div className="flex items-center justify-center gap-3 py-3 bg-ink text-canvas h-[38px] text-xs">
      <Van className="text-lime" />
      <p>Бесплатная доставка от 5 000 ₽</p>
      <Dot />
      <p className="text-text-disabled">Гарантия 2 года и возврат 14 дней</p>
    </div>
  );
};
