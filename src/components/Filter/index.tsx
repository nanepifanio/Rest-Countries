import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import * as Style from "./FilterStyle";

export const Filter = () => {
  const [region, setRegion] = useSearchParams();

  const handleSelected = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
    region.set("reg", target.options[target.options.selectedIndex].value);
    setRegion(region);
  };

  return (
    <Style.Select name="filter" onChange={handleSelected}>
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
