import { useEffect, useState } from "react";
import { CountriesType } from "../../types/types";
import * as Styles from "./BorderCountriesStyle";
import { api } from "../../api/api";
import { clearCountriesName } from "../../helpers/clearCountriesName";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";
import { useThemeContext } from "../../hooks/useThemeContext";

type Props = {
  borderCountries: string[];
};

export const BorderCountries = ({ borderCountries }: Props) => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const { state } = useThemeContext();

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
    <Styles.BorderCountriesStructure theme={state.theme.status}>
      <span>Border Countries: </span>
      {!countries.length && <Loading borderCountries />}
      {!!countries.length &&
        countries.map((countrie, index) => {
          return (
            <Link to={`/about/${countrie.name}`} key={index}>
              {clearCountriesName(countrie.name as string)}
            </Link>
          );
        })}
    </Styles.BorderCountriesStructure>
  );
};
