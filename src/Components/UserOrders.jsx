import { ArrowRight, CreditCard, Dot, RefreshCw, Van, X } from "lucide-react";
import { Button } from "../shared/Button";
import { FilterChips } from "../shared/FilterChips";
import { useState } from "react";
import { useGetOrdersQuery } from "../api/ordersApi";
import dayjs from "dayjs";
import { OrderCard } from "./OrderCard";

const data = [
  { label: "Все", value: "all" },
  { label: "Новое", value: "new" },
  { label: "Доставленные", value: "delivered" },
  { label: "Отменённые", value: "cancelled" },
];

const PAYMENT_METHODS = {
  cash: "Наличными",
  card: "Картой онлайн ",
};

export const UserOrders = () => {
  const [selectedValue, setSelectedValue] = useState(data[0].value);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { data: orders } = useGetOrdersQuery();

  if (selectedOrder) {
    return <OrderCard id={selectedOrder} />;
  }

  return (
    <div className="w-full flex flex-col gap-5.5 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl text-ink font-bold">Мои заказы</h2>
          <p className="text-xs text-muted">3 заказа · 1 активный</p>
        </div>
        <div>
          <Button variant="secondary" className="text-xs py-2.5">
            <RefreshCw className="size-3.5" /> Обновить
          </Button>
        </div>
      </div>
      <FilterChips
        data={data}
        value={selectedValue}
        onClick={setSelectedValue}
      />
      {orders?.items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 p-6  bg-surface border border-border rounded-3xl"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Заказ {item.number} </h3>
              <p className="text-xs text-muted">
                {dayjs(item.createdAt).format("DD MMMM YYYY")} ·{" "}
                {item.totalItems} товара · Курьером
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xs text-muted">Итого</p>
              <h3 className="font-bold">
                {item.totalPrice.toLocaleString("ru-RU")} ₽
              </h3>
            </div>
          </div>

          <div className=" flex h-px border border-text-disabled/14"></div>
          {item.items.map((product) => (
            <div key={product.productId} className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img
                  className="flex justify-center items-center size-12.5 rounded-2xl"
                  src={product.imageUrl}
                />

                <div className="flex flex-col">
                  <p className="text-xs text-muted uppercase">{product.slug}</p>
                  <p className="text-sm text-ink">{product.title}</p>
                  <div className="flex items-center">
                    <p className="text-xs text-muted">{product.quantity} шт </p>
                    <Dot className="size-3" />
                    <p className="text-xs text-muted">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Van className="size-3 text-lime-ink" />
              <p className="text-lime-ink text-xs">Доставка завтра</p>
              <CreditCard className="size-3 text-muted" />

              <p className="text-xs text-muted">
                {PAYMENT_METHODS[item.paymentMethod] || ""}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="text-xs text-danger! py-2.5"
              >
                <X className="size-3" />
                Отменить
              </Button>

              <Button
                onClick={() => setSelectedOrder(item.id)}
                className="text-xs py-2.5"
              >
                Детали заказа <ArrowRight className="size-3" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
