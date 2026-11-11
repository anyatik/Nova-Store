import { useState } from "react";
import { FilterChips } from "../shared/FilterChips";
import { ProductCard } from "./ProductCard";
import { useGetProductsQuery } from "../api/catalogApi";

const data = [
  { label: "Все", value: "all" },
  { label: "Смартфоны", value: "phone" },
  { label: "Аудио", value: "audio" },
  { label: "Ноутбуки", value: "laptops" },
];

export const ProductHits = () => {
  const [selectedValue, setSelectedValue] = useState(data[0].value);
  const { data: products } = useGetProductsQuery({ page: 1, limit: 5 });

  function handleSelect(value) {
    setSelectedValue(value);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between ">
        <div>
          <h2 className="text-2xl font-bold">Хиты недели</h2>
          <p className="text-muted text-sm">
            Выбор покупателей за последние 7 дней
          </p>
        </div>
        <div>
          <FilterChips
            value={selectedValue}
            onClick={handleSelect}
            variant="outline"
            data={data}
          />
        </div>
      </div>
      <div className="flex gap-6 mt-6 mb-10">
        {products?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
