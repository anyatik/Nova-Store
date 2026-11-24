import { ArrowLeft } from "lucide-react";
import { Button } from "../shared/Button";
import { ProductLineItem } from "../Components/ProductLineItem";
import { useGetCartQuery } from "../api/cartApi";

export const CartPage = () => {
  const { data } = useGetCartQuery();

  return (
    <div className="mx-16 my-8">
      <div className="flex justify-between mb-8 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">Корзина</h2>
          <p className="text-xs text-muted">
            {data?.totalItems} товара ·{" "}
            {data?.totalPrice.toLocaleString("ru-RU")} ₽
          </p>
        </div>
        <Button variant="ghost" className="text-xs">
          <ArrowLeft className="size-3.5" /> Продолжить покупки
        </Button>
      </div>

      <div className="flex bg-surface border border-border rounded-3xl items-center gap-3 p-5.5">
        <ProductLineItem />
      </div>
    </div>
  );
};
