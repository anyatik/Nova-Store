import { ArrowRight, Eye, ShieldCheck } from "lucide-react";
import { Button } from "../shared/Button";
import { Checkbox } from "../shared/Checkbox";
import { Input } from "../shared/Input";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useRegisterMutation } from "../api/authApi";

export const RegisterForm = (props) => {
  const { onNavigateToLogin } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  function onSubmit() {
    register({
      email: email.trim(),
      password: password.trim(),
      name: name.trim(),
    })
      .unwrap()
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        <Input
          type="name"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="text-xs text-muted" htmlFor="email">
          Email
        </label>
        <Input
          type="email"
          placeholder="Ведите логин"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="text-xs text-muted" htmlFor="password">
          Пароль
        </label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <Button
        className="w-full py-3.5 text-[14px] font-bold"
        onClick={onSubmit}
      >
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
