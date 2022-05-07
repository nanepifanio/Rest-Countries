import { useContext } from "react";
import { Context } from "../contexts/themeContext";

export const useThemeContext = () => {
  return useContext(Context);
};
