import { Route, Routes } from "react-router";
import { Layout } from "../Components/Layout";
import { MainPage } from "./MainPage";
import { AuthPage } from "./AuthPage";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  );
};
