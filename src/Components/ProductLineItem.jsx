import { Dot, Trash } from "lucide-react";
import { IconButton } from "../shared/IconButton";
import {
  useChangeQuantityItemMutation,
  useDeleteItemFromCartMutation,
  useGetCartQuery,
} from "../api/cartApi";
import { Button } from "../shared/Button";

export const ProductLineItem = () => {
  const { data } = useGetCartQuery();
  const [deleteItem, { isLoading: isDeleting }] =
    useDeleteItemFromCartMutation();
  const [changeQuantityItem, { isLoading: isUpdating }] =
    useChangeQuantityItemMutation();

  const handleQuantityChange = (productId, newQuantity, stock) => {
    if (newQuantity < 1 || newQuantity > stock) return;

    changeQuantityItem({
      productId,
      quantity: newQuantity,
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {data?.items?.map((item) => {
        const product = item?.product;
        const quantity = item?.quantity ?? 1;
        const stock = product?.stock ?? 1;

        return (
          <div key={product?.id} className="flex items-center w-full gap-4">
            <img
              className="flex justify-center items-center size-26 rounded-2xl object-cover"
              src={product?.imageUrl}
              alt={product?.title}
            />

            <div className="flex flex-col">
              <p className="text-xs text-muted uppercase">{product?.brand}</p>
              <p className="font-bold text-sm text-ink">{product?.title}</p>

              <div className="flex items-center">
                <p className="text-xs text-muted">В наличии</p>
                <Dot className="size-3" />
                <p className="text-xs text-muted">{stock} шт.</p>
              </div>
            </div>

            <div className="flex gap-6 items-center ml-auto">
              <div className="flex gap-2 w-28 shrink-0 bg-canvas justify-around items-center rounded-xl px-2 py-3">
                <Button
                  variant="ghost"
                  disabled={quantity <= 1 || isUpdating}
                  onClick={() =>
                    handleQuantityChange(product?.id, quantity - 1, stock)
                  }
                >
                  −
                </Button>

                <p className="tabular-nums min-w-5 text-center">{quantity}</p>

                <Button
                  variant="ghost"
                  disabled={quantity >= stock || isUpdating}
                  onClick={() =>
                    handleQuantityChange(product?.id, quantity + 1, stock)
                  }
                >
                  +
                </Button>
              </div>

              <div className="flex flex-col text-right  min-w-36 shrink-0">
                <div className="text-xl font-bold tabular-nums whitespace-nowrap">
                  {item?.subtotal?.toLocaleString("ru-RU")} ₽
                </div>

                <div className="text-xs text-muted tabular-nums whitespace-nowrap">
                  {product?.price?.toLocaleString("ru-RU")} ₽ / шт.
                </div>
              </div>

              <IconButton
                className="shrink-0"
                disabled={isDeleting}
                onClick={() => deleteItem({ productId: product?.id })}
                variant="secondary"
              >
                <Trash className="text-danger" />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};
