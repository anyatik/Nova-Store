import {
  ArrowLeft,
  Banknote,
  CreditCard,
  Dot,
  Phone,
  Van,
  X,
} from "lucide-react";
import { Button } from "../shared/Button";
import { useGetOrdersByIdQuery } from "../api/ordersApi";
import { Badge } from "../shared/Badge";
import { IconButton } from "../shared/IconButton";
import { OrderTimeline } from "./OrderTimeline";

const PAYMENT_METHODS = {
  cash: "Наличными",
  card: "Картой онлайн ",
};

const STATUS = {
  pending_payment: "Создан",
  paid: "Оплата",
  shipped: "Отправлен",
  delivered: "Доставлен",
  cancelled: "Отменён",
};

export const OrderCard = ({ id, onBackToOrders }) => {
  const { data } = useGetOrdersByIdQuery({ id });
  const items = data?.order?.items;
  const delivery = data?.order?.delivery;
  const status = data?.order?.status;

  return (
    <div className="w-full flex flex-col gap-5.5 mb-4">
      <div className="flex justify-between">
        <div className="pl-6 p-6 flex gap-2 bg-surface border border-border rounded-2xl w-max">
          <p>Номер заказа:</p>
          <h2 className="font-bold text-xl">{data?.order?.number}</h2>
        </div>

        <Button onClick={onBackToOrders} variant="ghost" className="text-xs">
          <ArrowLeft className="size-3.5" /> К заказам
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-4 bg-surface border border-border rounded-3xl p-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="font-bold text-md">Статус заказа</p>
              {status === "paid" && (
                <Badge
                  withDot
                  dotClassName="warning"
                  variant="warning"
                  size="small"
                >
                  {STATUS[status]}
                </Badge>
              )}
              {status === "pending_payment" && (
                <Badge
                  withDot
                  dotClassName="primary"
                  variant="primary"
                  size="small"
                >
                  {STATUS[status]}
                </Badge>
              )}
              {status === "shipped" && (
                <Badge
                  withDot
                  dotClassName="primary-re"
                  variant="primary-re"
                  size="small"
                >
                  {STATUS[status]}
                </Badge>
              )}
              {status === "delivered" && (
                <Badge
                  withDot
                  dotClassName="lime-ink"
                  variant="lime-ink"
                  size="small"
                >
                  {STATUS[status]}
                </Badge>
              )}
              {status === "cancelled" && (
                <Badge
                  withDot
                  dotClassName="error"
                  variant="error"
                  size="small"
                >
                  {STATUS[status]}
                </Badge>
              )}
            </div>
            {status === "cancelled" ? (
              ""
            ) : (
              <p className="text-xs text-muted">
                Заказ создан. Мы свяжемся для подтверждения доставки.
              </p>
            )}
          </div>

          <Button variant="secondary" className="text-xs text-danger! py-2.5">
            <X className="size-3" />
            Отменить
          </Button>
        </div>
        <div className=" flex h-px border border-text-disabled/14"></div>
        <OrderTimeline id={id} />
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
                  <p className="text-xs text-muted uppercase">{item.brand}</p>
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
          {data?.order?.promoCode ? (
            <div className="flex justify-between text-muted">
              <p>Скидка {data?.order?.promoCode}</p>
              <p className="text-lime-ink">Цена со скидкой</p>
            </div>
          ) : (
            ""
          )}

          <div className="flex justify-between text-muted">
            <p>Доставка</p>
            <p className="text-lime-ink">{delivery?.priceLabel}</p>
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
            <p className="text-ink font-bold">
              {delivery?.methodLabel} · завтра, 10:00–22:00
            </p>
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

        <div className="flex flex-2 flex-col gap-4 bg-surface border border-border rounded-3xl p-6">
          <div className="flex justify-between items-center">
            <p className="font-bold">Оплата</p>
            {data?.order?.paymentMethod === "cash" ? (
              <>
                <IconButton
                  variant="ghost"
                  className="bg-canvas text-muted"
                  size="sm"
                >
                  <Banknote />
                </IconButton>
              </>
            ) : (
              ""
            )}

            {data?.order?.paymentMethod === "card" ? (
              <IconButton
                variant="ghost"
                className="bg-canvas text-muted"
                size="sm"
              >
                <CreditCard />
              </IconButton>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col ">
            <p className="font-bold text-xs">
              {PAYMENT_METHODS[data?.order?.paymentMethod]}
            </p>
            <p className="text-muted text-xs">
              {data?.order?.payment?.methodLabel}
            </p>
          </div>

          <div className=" flex h-px border border-text-disabled/14"></div>

          <div className="flex flex-1 justify-between items-center mt-auto">
            <p className="text-xs text-muted">Сумма оплаты</p>
            <p className="font-bold">
              {data?.order?.totalPrice.toLocaleString("ru-RU")} ₽
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
