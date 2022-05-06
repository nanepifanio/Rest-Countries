import React, { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../api/api";
import { CountriesType } from "../../types/types";
import * as Style from "./FilterStyle";

export const Filter = () => {
  const [region, setRegion] = useSearchParams();

  useEffect(() => {
    getRegion();
  }, [region]);

  const getRegion = async (): Promise<void> => {
    const regionCountries: CountriesType[] = await api.filterByRegion(
      region.get("region") as string
    );
  };

  const handleSelected = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
    console.log(target.options[target.options.selectedIndex].value);
  };

  return (
    <Style.Select name="filter" onChange={handleSelected}>
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
