import { useRoutes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const CountriesRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about/:countrie", element: <About /> },
  ]);
};
