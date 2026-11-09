import { Outlet } from "react-router";
import { Header } from "./Header";
import { DeliveryInformation } from "./DeliveryInformation";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div>
      <DeliveryInformation />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
