import { useEffect, useState } from "react";
import { CountriesType } from "../../types/types";
import * as Styles from "./BorderCountriesStyle";
import { api } from "../../api/api";
import { clearCountriesName } from "../../helpers/clearCountriesName";
import { Link } from "react-router-dom";

type Props = {
  borderCountries: string[];
};

export const BorderCountries = ({ borderCountries }: Props) => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    const timer: number = setTimeout(() => {
      getByAlphacode();
    }, 200);
    return () => clearTimeout(timer);
  }, [borderCountries]);

  const getByAlphacode = async (): Promise<void> => {
    const countriesArray: CountriesType[] = [];
    for (const alpha of borderCountries) {
      const countrie: CountriesType = await api.filterByAlphacode(alpha);
      countriesArray.push(countrie);
    }
    setCountries(countriesArray);
  };

  return (
    <Styles.BorderCountriesStructure>
      <span>Border Countries: </span>
      {countries.map((countrie, index) => {
        return (
          <Link to={`/about/${countrie.name}`} key={index}>
            {clearCountriesName(countrie.name)}
          </Link>
        );
      })}
    </Styles.BorderCountriesStructure>
  );
};
