import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import * as Style from "./FilterStyle";
import { useThemeContext } from "../../hooks/useThemeContext";

export const Filter = () => {
  const [region, setRegion] = useSearchParams();
  const { state } = useThemeContext();

  const handleSelected = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
    if (region.has("search")) region.delete("search");
    region.set("region", target.options[target.options.selectedIndex].value);
    setRegion(region);
  };

  return (
    <Style.Select
      name="filter"
      onChange={handleSelected}
      theme={state.theme.status}
    >
      <option disabled selected style={{ display: "none" }}>
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </Style.Select>
  );
};
