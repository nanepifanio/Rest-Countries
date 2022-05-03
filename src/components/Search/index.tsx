//Icons
import lupa_light from "../../assets/lupa-light.svg";
import lupa_dark from "../../assets/lupa-dark.svg";
//Style
import * as Style from "./SearcStyles";

export const Search = () => {
  return (
    <Style.SearchArea>
      <Style.SearchIcon src={lupa_light} />
      <Style.SearchInput placeholder="Search for a country..." />
    </Style.SearchArea>
  );
};
