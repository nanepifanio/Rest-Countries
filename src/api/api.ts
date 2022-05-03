import axios from "axios";
import { CountriesType } from "../types/types";

const https = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const api = {
  getAllCountries: async (): Promise<CountriesType[]> => {
    return (await https.get("/all")).data;
  },
};
