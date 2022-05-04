import { useState, useEffect } from "react";
import { CountriesType } from "../types/types";
import { api } from "../api/api";

export const useAllCountries = (): CountriesType[] => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    allCountries();
  }, []);

  const allCountries = async (): Promise<void> => {
    const all: CountriesType[] = await api.getAllCountries();
    setCountries(all);
  };

  return countries;
};
