import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter } from "react-router";
import { Router } from "./Pages/Router";
import { api } from "./api/api";

export const App = () => {
  return (
    <ApiProvider api={api}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApiProvider>
  );
};
