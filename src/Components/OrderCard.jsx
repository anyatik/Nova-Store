import { CreditCard, Dot, Phone, Van, X } from "lucide-react";
import { Button } from "../shared/Button";
import { useGetOrdersByIdQuery } from "../api/ordersApi";
import { Badge } from "../shared/Badge";
import { IconButton } from "../shared/IconButton";

const PAYMENT_METHODS = {
  cash: "Наличными",
  card: "Картой онлайн ",
};

export const OrderCard = ({ id }) => {
  const { data } = useGetOrdersByIdQuery({ id });
  const items = data?.order?.items;
  const delivery = data?.order?.delivery;
  console.log(items);
  return (
    <div className="w-full flex flex-col gap-5.5 mb-4">
      <div className="flex flex-col justify-between gap-4 bg-surface border border-border rounded-3xl p-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="font-bold text-md">Статус заказа</p>
              <Badge
                withDot
                dotClassName="lime-ink"
                variant="lime-ink"
                size="small"
              >
                {data?.order?.status}
              </Badge>
            </div>
            <p className="text-xs text-muted">
              Заказ создан. Мы свяжемся для подтверждения доставки.
            </p>
          </div>

          <Button variant="secondary" className="text-xs text-danger! py-2.5">
            <X className="size-3" />
            Отменить
          </Button>
        </div>
        <div className=" flex h-px border border-text-disabled/14"></div>
      </div>

      <div className="flex flex-col justify-between gap-4 bg-surface border border-border rounded-3xl p-6">
        <div className="flex justify-between">
          <h3 className="font-bold text-md">Состав заказа</h3>
          <p className="text-xs text-muted">
            {data?.order?.totalItems} товаров
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {items?.map((item) => (
            <div key={item.productId} className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img
                  className="flex justify-center items-center size-12.5 rounded-2xl"
                  src={item.imageUrl}
                />
                <div className="flex flex-col">
                  <p className="text-xs text-muted uppercase">{item.slug}</p>
                  <p className="text-sm text-ink">{item.title}</p>
                  <div className="flex items-center">
                    <p className="text-xs text-muted">{item.quantity} шт </p>
                    <Dot className="size-3" />
                    <p className="text-xs text-muted">
                      {item.price.toLocaleString("ru-RU")} ₽
                    </p>
                  </div>
                </div>
                <div className="flex ml-auto">
                  <p className="font-bold text-sm">
                    {item.subtotal.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex h-px border border-text-disabled/14"></div>

        <div className="flex flex-col text-sm gap-2">
          <div className="flex justify-between text-muted">
            <p>Сумма</p>
            <p>{data?.order?.totalPrice.toLocaleString("ru-RU")} ₽</p>
          </div>
          <div className="flex justify-between text-muted">
            <p>Скидка NOVA10</p>
            <p className="text-lime-ink">Цена со скидкой</p>
          </div>
          <div className="flex justify-between text-muted">
            <p>Доставка</p>
            <p className="text-lime-ink">Бесплатно</p>
          </div>
        </div>

        <div className=" flex h-px border border-text-disabled/14"></div>

        <div className="flex justify-between text-sm font-bold">
          <p>Итого</p>
          <p className="text-xl">
            {data?.order?.totalPrice.toLocaleString("ru-RU")} ₽
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-3 flex-col justify-between gap-4 bg-surface border border-border rounded-3xl p-6">
          <div className="flex justify-between items-center">
            <p className="font-bold">Доставка</p>
            <IconButton
              variant="ghost"
              className="bg-accent-soft text-accent"
              size="sm"
            >
              <Van />
            </IconButton>
          </div>
          <div className="flex flex-col gap-1 text-xs text-muted">
            <p className="text-ink font-bold">Курьером · завтра, 10:00–22:00</p>
            <p>
              {delivery?.name} · {delivery?.phone}
            </p>
            <p>{delivery?.address}</p>
          </div>
          <div className="flex bg-lime-soft text-lime-ink text-xs gap-2 items-center rounded-xl p-2.5">
            <Phone className="size-3" />
            <p>Курьер позвонит за час до доставки.</p>
          </div>
        </div>

        <div className="flex flex-2 flex-col justify-between gap-4 bg-surface border border-border rounded-3xl p-6">
          <div className="flex justify-between items-center">
            <p className="font-bold">Оплата</p>

            <IconButton
              variant="ghost"
              className="bg-canvas text-muted"
              size="sm"
            >
              <CreditCard />
            </IconButton>
          </div>

          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
