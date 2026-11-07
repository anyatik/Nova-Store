import { MoveUpRight } from "lucide-react";
import { Button } from "../shared/Button";
import { useGetCategoriesQuery } from "../api/catalogApi";

export const Categories = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <div className="flex flex-col gap-6 my-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Категории</h2>
          <p className="text-muted">Найди то, что подходит именно тебе</p>
        </div>
        <Button variant="ghost">
          Все категории
          <MoveUpRight className="size-4" />
        </Button>
      </div>
      <div className="flex gap-4">
        {data?.length &&
          data?.map((category) => (
            <div
              key={category.id}
              className="bg-surface rounded-3xl border border-border flex flex-1 items-center py-6 p-4 gap-4 w-max"
            >
              <div className="size-12 bg-accent-soft rounded-2xl flex justify-center items-center">
                <img src={category.iconUrl} />
              </div>
              <div className="flex flex-col text-sm">
                <p>{category.name}</p>
                <p className="text-xs text-muted">
                  {category.productCount} товара
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
