import { Heart, MapPin, Package, PackageCheck } from "lucide-react";
import { Badge } from "../shared/Badge";
import { IconButton } from "../shared/IconButton";
import { Tabs } from "../shared/Tabs";
import { LoginForm } from "../Components/LoginForm";
import { RegisterForm } from "../Components/RegisterForm";
import { useState } from "react";

export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  function onTabChange(value) {
    setActiveTab(value);
  }

  const items = [
    {
      value: "login",
      label: "Вход",
      component: <LoginForm onNavigateToRegister={onTabChange} />,
    },
    {
      value: "register",
      label: "Регистрация",
      component: <RegisterForm onNavigateToLogin={onTabChange} />,
    },
  ];

  return (
    <div className="flex m-16 mt-4 rounded-3xl overflow-hidden">
      <div className="flex flex-col flex-2 bg-hero p-11 gap-5.5 min-h-[675px]">
        <Badge withDot dotClassName="bg-lime" variant="lime-outline">
          NOVA ACCOUNT
        </Badge>
        <div className="flex flex-col gap-3">
          <h2 className="text-[34px] font-bold text-surface">
            Вся техника, заказы и избранное — в одном месте.
          </h2>
          <p className="text-sm text-text-on-dark-soft">
            Войдите, чтобы отслеживать доставку и возвращаться к сохранённым
            товарам.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="flex gap-2.5 items-center">
            <IconButton className="bg-surface/5! border-0">
              <PackageCheck />
            </IconButton>
            <p className="text-xs text-disabled">
              История заказов и статусы доставки
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <IconButton className="bg-surface/5! border-0">
              <Heart />
            </IconButton>
            <p className="text-xs text-disabled">
              Избранное с любой страницы каталога
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <IconButton className="bg-surface/5! border-0">
              <MapPin />
            </IconButton>
            <p className="text-xs text-disabled">
              Данные доставки уже заполнены
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center border border-surface/15 bg-surface/7 rounded-2xl p-4 mt-auto">
          <div className="flex gap-2 items-center">
            <IconButton variant="lime">
              <Package />
            </IconButton>
            <div>
              <p className="text-xs font-bold text-surface">Заказ ORD-1006</p>
              <p className="text-xs text-text-on-dark-soft">
                3 товара · 279 970 ₽
              </p>
            </div>
          </div>
          <Badge variant="lime">New</Badge>
        </div>
      </div>

      <div className="flex flex-4 bg-surface p-14  justify-center">
        <Tabs onValueChange={onTabChange} items={items} value={activeTab} />
      </div>
    </div>
  );
};
