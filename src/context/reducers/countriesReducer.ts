import { api } from "../../api/api";
import { GeneralReducerAction } from "../../types/types";

export type CountriesType = {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: [{ name: string }];
  languages: [{ name: string }];
  borders: string[];
};

export const initialCountryState: CountriesType[] = [
  {
    flag: "",
    name: "",
    nativeName: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: [],
    currencies: [{ name: "" }],
    languages: [{ name: "" }],
    borders: [],
  },
];

export const countriesReducer = async (
  state: CountriesType[],
  actions: GeneralReducerAction
) => {
  switch (actions.type) {
    case "GET":
      const all: CountriesType[] = await api.getAllCountries();
      state = [...all];
      return state;
    case "SEARCH":
      const searched: CountriesType[] = await api.searchCountry(
        actions.payload?.name
      );
      state = [...searched];
      return state;
    case "FILTER":
      const filtred: CountriesType[] = await api.filterPerRegion(
        actions.payload?.region
      );
      state = [...filtred];
      return state;
  }

  return state;
};
