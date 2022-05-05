import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBorderCountries } from "../../hooks/useBorderCountries";
import { CountriesType } from "../../types/types";
import * as Styles from "./BorderCountriesStyle";

type Props = {
  borderCountries: string[];
};

export const BorderCountries = ({ borderCountries }: Props) => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountries(useBorderCountries(borderCountries));
    }, 1000);
    return () => clearTimeout(timer);
  }, [borderCountries]);

  return (
    <Styles.BorderCountriesStructure>
      <span>Border Countries: </span>
      {countries.map((countrie, index) => {
        return (
          <Link to={`/about/${countrie.name}`} key={index}>
            {countrie.name}
          </Link>
        );
      })}
    </Styles.BorderCountriesStructure>
  );
};
