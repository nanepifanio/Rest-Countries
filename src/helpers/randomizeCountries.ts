import { CountriesType } from "../types/types";

const randomize = (countriesLength: number): number =>
  Math.floor(Math.random() * countriesLength);

export const randomizeCountries = (
  countries: CountriesType[]
): CountriesType[] => {
  const randomNumberArray: number[] = [];
  const randomicCountries: CountriesType[] = [];
  let random: number = randomize(countries.length);
  for (let i = 0; i < 8; i++) {
    while (randomNumberArray.includes(random)) {
      random = randomize(countries.length);
    }
    randomicCountries.push(countries[random]);
    randomNumberArray.push(random);
    random = randomize(countries.length);
  }
  return randomicCountries;
};
