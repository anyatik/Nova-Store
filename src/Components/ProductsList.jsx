import { useAddItemToCartMutation } from "../api/cartApi";
import { useGetProductsQuery } from "../api/catalogApi";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  const { data } = useGetProductsQuery({ page: 1, limit: 9 });
  const [addItem] = useAddItemToCartMutation();

  console.log(data);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between mb-4">
        <p>Найдено 18 товаров</p>
        <p>сортировка</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((item) => (
          <ProductCard
            key={item.id}
            onAddItemClick={() => addItem({ productId: item.id })}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};
