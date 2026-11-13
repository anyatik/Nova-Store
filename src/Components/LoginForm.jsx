import { ArrowRight, Eye } from "lucide-react";
import { Button } from "../shared/Button";
import { Checkbox } from "../shared/Checkbox";
import { Input } from "../shared/Input";

export const LoginForm = (props) => {
  const { onNavigateToRegister } = props;

  return (
    <div className="flex flex-col gap-4.5">
      <div>
        <h2 className="font-bold text-2xl text-ink">С возвращением</h2>
        <p className="text-muted text-xs">
          Войдите, чтобы открыть заказы и избранное.
        </p>
      </div>
      <div>
        <label className="text-xs text-muted" htmlFor="email">
          Email
        </label>
        <Input type="email" placeholder="Введите логин" />
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
      </div>
      <div className="flex justify-between items-center">
        <Checkbox label="Запомнить меня" />
        <p className="text-xs text-accent">Нужна помощь?</p>
      </div>
      <Button className="w-full py-3.5 text-[14px] font-bold">
        Войти <ArrowRight className="size-4" />
      </Button>
      <div className="flex justify-center items-center gap-1">
        <p className="text-xs text-muted">Нет аккаунта?</p>
        <span
          onClick={() => onNavigateToRegister("register")}
          className="text-xs text-ink font-bold cursor-pointer hover:text-accent"
        >
          Создать аккаунт
        </span>
      </div>
    </div>
  );
};
