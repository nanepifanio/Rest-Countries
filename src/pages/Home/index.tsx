// Components
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
// Api
import { api } from "../../api/api";
// Types
import { CountriesType } from "../../types/types";
// Style
import * as Style from "./HomeStyles";
import { useEffect, useState } from "react";
import { CountriesBox } from "../../components/CountriesBox";

export const Home = () => {
  const [countrie, setCountrie] = useState<CountriesType | undefined>(
    undefined
  );

  useEffect(() => {
    allCountries();
  }, []);

  const allCountries = async (): Promise<void> => {
    const all: CountriesType[] = await api.getAllCountries();
    setCountrie(all[1]);
    console.log(countrie);
  };

  return (
    <Style.HomeStructure>
      <Style.SearchAndFilterArea>
        <Search />
        <Filter />
      </Style.SearchAndFilterArea>
      <Style.CountriesGrid>
        <CountriesBox countriedata={countrie} />
      </Style.CountriesGrid>
    </Style.HomeStructure>
  );
};
