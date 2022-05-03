import axios from "axios";
import { CountriesType } from "../types/types";

const https = axios.create({
  baseURL: "https://restcountries.com/v2",
});

export const api = {
  getAllCountries: async (): Promise<CountriesType[]> => {
    return (
      await https.get(
        "/all?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders"
      )
    ).data;
  },
  searchCountry: async (name: string | undefined): Promise<CountriesType[]> => {
    return (await https.get(`/name/${name}`)).data;
  },
  filterPerRegion: async (
    region: string | undefined
  ): Promise<CountriesType[]> => {
    return (await https.get(`/region/${region}`)).data;
  },
};
