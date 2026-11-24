import { useState } from "react";
import { Tabs } from "../shared/Tabs";
import { LayoutGrid, StretchHorizontal } from "lucide-react";
import { CatalogSidebar } from "../Components/CatalogSidebar";
import { ProductsList } from "../Components/ProductsList";

const items = [
  {
    value: "grid",
    icon: <LayoutGrid className="size-4" />,
  },
  {
    value: "horizontal_grid",
    icon: <StretchHorizontal className="size-4" />,
  },
];

export const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState(items[0].value);

  return (
    <div className="mx-16 my-8">
      <div className="flex justify-between mb-8">
        <h2 className="text-4xl font-bold">Каталог техники</h2>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          items={items}
          listClassName="bg-surface border border-border"
          tabClassName="min-w-0! "
        />
      </div>
      <div className="flex gap-8">
        <CatalogSidebar />
        <ProductsList />
      </div>
    </div>
  );
};
