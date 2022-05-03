//Icons
import moon_light from "../../assets/darkmode-light.svg";
import moon_dark from "../../assets/darkmode-dark.svg";
//Style
import * as Style from "./HeaderStyle";

export const Header = () => {
  return (
    <Style.HeaderStructure>
      <h1>Where in the world?</h1>
      <Style.DarkModeArea>
        <Style.DarkModeIcon src={moon_light} />
        <p>Dark Mode</p>
      </Style.DarkModeArea>
    </Style.HeaderStructure>
  );
};
