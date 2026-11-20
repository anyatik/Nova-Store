import dayjs from "dayjs";
import { useGetOrdersByIdQuery } from "../api/ordersApi";
import { cva } from "class-variance-authority";

const STATUS_STEPS = [
  { count: 1, label: "Создан", value: "pending_payment" },
  { count: 2, label: "Оплата", value: "paid" },
  { count: 3, label: "Отправлен", value: "shipped" },
  { count: 4, label: "Доставлен", value: "delivered" },
];

const stepVariants = cva(
  "flex rounded-full items-center justify-center border font-bold size-6 p-3",
  {
    variants: {
      variant: {
        previous: "bg-ink text-surface border-ink",
        current: "bg-accent-soft text-accent border-accent-soft",
        next: "bg-canvas text-muted border-border",
      },
    },
    defaultVariants: {
      variant: "next",
    },
  },
);

export const OrderTimeline = ({ id }) => {
  const { data } = useGetOrdersByIdQuery({ id });
  const payment = data?.order?.payment;
  const delivery = data?.order?.delivery;

  function calculateVariant(step) {
    if (data?.order?.status === step.value) {
      return "current";
    }
    if (
      STATUS_STEPS.find((s) => s.value === data?.order?.status)?.count >
      step.count
    ) {
      return "previous";
    } else return "next";
  }
  return (
    <div className="flex text-xs gap-4 items-center">
      {STATUS_STEPS.map((step, index) => (
        <>
          <div className="flex gap-2 items-center">
            <div
              className={stepVariants({
                variant: calculateVariant(step),
              })}
            >
              {step.count}
            </div>
            <div>
              <p className="font-bold">{step.label}</p>
              {step.count === 1 && (
                <p>{dayjs(data?.order?.createdAt).format("DD MMMM")}</p>
              )}
              {step.count == 2 && <p>{payment?.methodLabel}</p>}
              {step.count === 3 && <p>{delivery?.methodLabel}</p>}
            </div>
          </div>
          {index + 1 !== STATUS_STEPS.length && (
            <div className=" flex h-px border border-text-disabled/14 min-w-11"></div>
          )}
        </>
      ))}
    </div>
  );
};
