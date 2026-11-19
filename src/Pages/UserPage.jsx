import { useState } from "react";
import { AccountSidebar } from "../Components/AccountSidebar";
import { Heart, Package, User } from "lucide-react";
import { UserOrders } from "../Components/UserOrders";
import { UserFavorites } from "../Components/UserFavorites";

const items = [
  {
    value: "orders",
    label: "Заказы",
    icon: <Package className="size-4" />,
  },
  {
    value: "favorite",
    label: "Избранное",
    icon: <Heart className="size-4" />,
  },
  {
    value: "profile",
    label: "Профиль",
    icon: <User className="size-4" />,
  },
];
export const UserPage = () => {
  const [activeTab, setActiveTab] = useState(items[0].value);

  return (
    <div className="mx-16">
      <div className="my-7">
        <h2 className="text-4xl font-bold text-ink">Личный кабинет</h2>
        <p className="text-xs text-muted">
          История заказов, статусы доставки и повторные покупки.
        </p>
      </div>
      <div className="flex gap-8">
        <AccountSidebar
          items={items}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {activeTab === "orders" && <UserOrders />}

        {activeTab === "favorite" && <UserFavorites />}
      </div>
    </div>
  );
};
