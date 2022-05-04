import { useState, useEffect } from "react";
import { CountriesType } from "../types/types";
import { api } from "../api/api";
import { randomizeCountries } from "../helpers/randomizeCountries";

export const useRandomCountries = (): CountriesType[] => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    allCountries();
  }, []);

  const allCountries = async (): Promise<void> => {
    const all: CountriesType[] = await api.getAllCountries();
    setCountries(randomizeCountries(all));
  };

  return countries;
};
