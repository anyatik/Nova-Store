import { CircleQuestionMark } from "lucide-react";

export const Alert = () => {
  return (
    <div className="flex flex-col bg-accent-soft rounded-2xl gap-2 p-4">
      <div className="flex items-center gap-2">
        <CircleQuestionMark className="size-4.5 text-accent" />
        <p className="font-bold text-xs">Нужна помощь?</p>
      </div>
      <p className="text-muted text-xs">
        Напишите на hello@nova.store — ответим в течение дня.
      </p>
    </div>
  );
};
