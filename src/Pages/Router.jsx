import { Route, Routes } from "react-router";
import { Layout } from "../Components/Layout";
import { MainPage } from "./MainPage";
import { AuthPage } from "./AuthPage";
import { UserPage } from "./UserPage";
import { AuthGuard } from "../Components/AuthGuard";
import { CartPage } from "./CartPage";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />

          <Route
            path="/profile"
            element={
              <AuthGuard>
                <UserPage />
              </AuthGuard>
            }
          />
          <Route
            path="/cart"
            element={
              <AuthGuard>
                <CartPage />
              </AuthGuard>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
