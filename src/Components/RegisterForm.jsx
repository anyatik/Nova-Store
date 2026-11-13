import { ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { Button } from "../shared/Button";
import { Checkbox } from "../shared/Checkbox";
import { Input } from "../shared/Input";
import { Link } from "react-router";

export const RegisterForm = (props) => {
  const { onNavigateToLogin } = props;
  return (
    <div className="flex flex-col gap-4.5">
      <div>
        <h2 className="font-bold text-2xl text-ink">Создать аккаунт</h2>
        <p className="text-muted text-xs">
          Заказы и избранное будут ждать вас здесь.
        </p>
      </div>
      <div>
        <label className="text-xs text-muted" htmlFor="name">
          Имя
        </label>
        <Input type="name" placeholder="Введите имя" />
      </div>
      <div>
        <label className="text-xs text-muted" htmlFor="email">
          Email
        </label>
        <Input type="email" placeholder="Ведите логин" />
      </div>
      <div>
        <label className="text-xs text-muted" htmlFor="password">
          Пароль
        </label>
        <Input
          type="password"
          placeholder="Введите пароль"
          iconLeft={<Eye className="size-4 text-muted" />}
        />
        <p className="text-xs text-muted">Минимум 6 символов</p>
      </div>
      <div className=" flex justify-center items-center rounded-[10px] bg-accent-soft text-xs text-accent-pressed py-3">
        <ShieldCheck />
        <p> Учебный проект: данные хранятся только в локальной базе.</p>
      </div>
      <Button className="w-full py-3.5 text-[14px] font-bold">
        Войти <ArrowRight className="size-4" />
      </Button>
      <div className="flex justify-center items-center gap-1">
        <p className="text-xs text-muted">Уже есть аккаунт?</p>
        <span
          onClick={() => onNavigateToLogin("login")}
          className="text-xs text-ink font-bold cursor-pointer hover:text-accent"
        >
          Войти
        </span>
      </div>
    </div>
  );
};
