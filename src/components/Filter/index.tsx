import * as Style from "./FilterStyle";

export const Filter = () => {
  return (
    <Style.Select name="filter">
      <option disabled selected style={{ display: "none" }}>
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </Style.Select>
  );
};
