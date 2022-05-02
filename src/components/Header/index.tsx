import moonsvg from "../../assets/darkmode.svg";
import * as Style from "./HeaderStyle";

export const Header = () => {
  return (
    <Style.HeaderStructure>
      <p>Where in the world?</p>
      <div>
        <Style.DarkMode src={moonsvg} />
        <p>Dark Mode</p>
      </div>
    </Style.HeaderStructure>
  );
};
