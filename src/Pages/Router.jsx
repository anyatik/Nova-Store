import { Route, Routes } from "react-router";
import { Layout } from "../Components/Layout";
import { MainPage } from "./MainPage";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};
