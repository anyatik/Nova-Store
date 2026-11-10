import { Dot, Van, X } from "lucide-react";
import { useState } from "react";
import { IconButton } from "../shared/IconButton";

export const DeliveryInformation = () => {
  const [isClosed, setIsClosed] = useState(false);

  function handleClose() {
    setIsClosed(true);
  }

  if (isClosed) {
    return null;
  }

  return (
    <div className="flex py-3 bg-ink items-center text-canvas h-[38px] text-xs">
      <div className="flex flex-1 items-center justify-center gap-3">
        <Van className="text-lime" />
        <p>Бесплатная доставка от 5 000 ₽</p>
        <Dot />
        <p className="text-text-disabled">Гарантия 2 года и возврат 14 дней</p>
      </div>
      <IconButton onClick={handleClose} className="ml-auto" variant="ghost">
        <X />
      </IconButton>
    </div>
  );
};
