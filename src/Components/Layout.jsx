import { Outlet } from "react-router";
import { Header } from "./Header";
import { DeliveryInformation } from "./DeliveryInformation";

export const Layout = () => {
  return (
    <div>
      <DeliveryInformation />
      <Header />
      <Outlet />
    </div>
  );
};
