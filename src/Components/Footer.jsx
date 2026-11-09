import { Link } from "react-router";
import { IconButton } from "../shared/IconButton";
import {
  MessageCircleWarning,
  MessageCirclePlus,
  MessageCircleMore,
} from "lucide-react";
import { Badge } from "../shared/Badge";

export const Footer = () => {
  return (
    <div className=" px-16  bg-ink text-text-disabled pt-12 pb-7">
      <div className="flex ">
        <div className="flex flex-col gap-3 max-w-90 text-[13px]">
          <Link>
            <img className="w-26 h-8" src="/nova-logo-light.png" />
          </Link>
          <p>
            Техника, которая работает на тебя. Подбираем гаджеты для работы,
            учёбы и отдыха с 2020 года.
          </p>
          <div className="flex gap-2">
            <IconButton className="bg-surface/5! border-0">
              <MessageCircleWarning />
            </IconButton>
            <IconButton className="bg-surface/5! border-0">
              <MessageCirclePlus />
            </IconButton>
            <IconButton className="bg-surface/5! border-0">
              <MessageCircleMore />
            </IconButton>
          </div>
        </div>

        <div className="flex gap-16 ml-auto  text-xs ">
          <div className="flex gap-2 flex-col">
            <h4 className="font-bold text-surface text-[11px] uppercase">
              каталог
            </h4>
            <p>Смартфоны</p>
            <p>Ноутбуки</p>
            <p>Аудио</p>
            <p>Умные часы</p>
            <p>Аксессуары</p>
          </div>
          <div className="flex gap-2 flex-col">
            <h4 className="font-bold text-surface text-[11px] uppercase">
              покупателям
            </h4>
            <p>Доставка</p>
            <p>Оплата</p>
            <p>Возврат</p>
            <p>Гарантия</p>
            <p>Поддержка</p>
          </div>
          <div className="flex gap-2 flex-col">
            <h4 className="font-bold text-surface text-[11px] uppercase">
              контакты
            </h4>
            <p>Москва, Тверская, 1</p>
            <p>+7 999 123-45-67</p>
            <p>hello@nova.store</p>
            <p>Пн–Вс, 10:00–21:00</p>
          </div>
        </div>
      </div>

      <div className=" flex h-ph border border-text-disabled/14 mt-8"></div>

      <div className="flex items-center mt-8">
        <p className="text-xs">
          © 2026 NOVA Store. Учебный проект для тренировки фронтенда.
        </p>
        <div className="flex gap-2 ml-auto">
          <Badge className="bg-surface/5!  text-text-on-dark-soft text-[11px] rounded-md">
            VISA
          </Badge>
          <Badge className="bg-surface/5!  text-text-on-dark-soft text-[11px] rounded-md">
            MIR
          </Badge>
          <Badge className="bg-surface/5!  text-text-on-dark-soft text-[11px] rounded-md">
            SBP
          </Badge>
        </div>
      </div>
    </div>
  );
};
