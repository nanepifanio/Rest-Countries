import { useState, useEffect } from "react";
import { CountriesType } from "../types/types";
import { api } from "../api/api";
import { randomizeCountries } from "../helpers/randomizeCountries";
import { useSearchParams } from "react-router-dom";

export const useCountries = (): CountriesType[] => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [region] = useSearchParams();
  const [search] = useSearchParams();

  useEffect(() => {
    getCountries();
  }, [region.get("reg"), search.get("name")]);

  const getCountries = async (): Promise<void> => {
    if (region.get("reg")) {
      const reg: CountriesType[] = await api.filterByRegion(
        region.get("reg") as string
      );
      setCountries(reg);
    } else if (search.get("name")) {
      const name: CountriesType[] = await api.searchCountry(
        search.get("name") as string
      );
      setCountries(name);
    } else {
      const all: CountriesType[] = await api.getAllCountries();
      setCountries(randomizeCountries(all));
    }
  };

  return countries;
};
