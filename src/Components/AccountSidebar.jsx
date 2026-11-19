import { LogOut } from "lucide-react";
import { useGetProfileQuery, useLogoutMutation } from "../api/authApi";
import { Tabs } from "../shared/Tabs";
import { Button } from "../shared/Button";
import { Alert } from "./Alert";
import { useNavigate } from "react-router";

export const AccountSidebar = ({ items, onTabChange, activeTab }) => {
  const { data } = useGetProfileQuery();
  const [logout] = useLogoutMutation();

  const navigate = useNavigate();
  function handleLogout() {
    logout()
      .unwrap()
      .finally(() => {
        localStorage.removeItem("accessToken");
        navigate("/");
      });
  }

  return (
    <div className="flex flex-col max-w-[288px] gap-4 mb-4">
      <div className="flex bg-surface border border-border rounded-3xl items-center gap-3 p-5.5">
        <div className="flex justify-center items-center bg-hero size-12.5 rounded-2xl text-surface font-bold">
          ИП
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-ink">{data?.name}</p>
          <p className="text-xs text-muted">{data?.email}</p>
        </div>
      </div>
      <div>
        <Tabs
          onValueChange={onTabChange}
          value={activeTab}
          listClassName="bg-surface p-2 border border-border"
          direction="vertical"
          items={items}
        />
      </div>
      <Alert />
      <div className="flex">
        <Button variant="ghost" className="text-muted" onClick={handleLogout}>
          <LogOut className="size-4 text-muted" /> Выйти из аккаунта
        </Button>
      </div>
    </div>
  );
};
