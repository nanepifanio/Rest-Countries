import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";

export const HomeRoutes = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};
