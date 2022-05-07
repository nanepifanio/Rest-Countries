//Icons
import light from "../../assets/light-mode.svg";
import dark from "../../assets/dark-mode.svg";
//Style
import * as Style from "./HeaderStyle";
// Context
import { useThemeContext } from "../../hooks/useThemeContext";

export const Header = () => {
  const { state, dispatch } = useThemeContext();

  return (
    <Style.HeaderStructure theme={state.theme.status}>
      <a href="/">
        <h1>Where in the world?</h1>
      </a>
      <Style.DarkModeArea
        onClick={() =>
          dispatch({
            type: "CHANGE_THEME",
            payload: {
              status: state.theme.status === "light" ? "dark" : "light",
            },
          })
        }
      >
        <Style.DarkModeIcon
          src={state.theme.status === "light" ? dark : light}
        />
        <p>{state.theme.status === "light" ? "Dark Mode" : "Light Mode"}</p>
      </Style.DarkModeArea>
    </Style.HeaderStructure>
  );
};
