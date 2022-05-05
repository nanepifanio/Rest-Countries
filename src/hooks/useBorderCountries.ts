import { CountriesType } from "../types/types";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useBorderCountries = (borderCountries: string[]) => {
  const countriesArray: CountriesType[] = [];

  const getByAlphacode = async (): Promise<void> => {
    for (const alpha of borderCountries) {
      const countrie: CountriesType[] = await api.filterByAlphacode(alpha);
      countriesArray.push(countrie[0]);
    }
    console.log(countriesArray);
  };

  getByAlphacode();

  return countriesArray;
};
