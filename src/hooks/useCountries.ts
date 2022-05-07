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
  }, [region.get("region"), search.get("search")]);

  const getCountries = async (): Promise<void> => {
    if (region.get("region")) {
      const reg: CountriesType[] = await api.filterByRegion(
        region.get("region") as string
      );
      setCountries(reg);
    } else if (search.get("search")) {
      try {
        const name: CountriesType[] = await api.searchCountry(
          search.get("search") as string
        );
        setCountries([...name]);
      } catch (erro) {
        setCountries([]);
      }
    } else {
      const all: CountriesType[] = await api.getAllCountries();
      setCountries(randomizeCountries(all));
    }
  };

  return countries;
};
