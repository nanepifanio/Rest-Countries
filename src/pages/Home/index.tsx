// Components
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { CountriesBox } from "../../components/CountriesBox";
// Api
import { api } from "../../api/api";
// Types
import { CountriesType } from "../../types/types";
// Style
import * as Style from "./HomeStyles";
import { useEffect, useState } from "react";

export const Home = () => {
  const [countrie, setCountrie] = useState<CountriesType[]>([]);

  useEffect(() => {
    allCountries();
  }, []);

  const allCountries = async (): Promise<void> => {
    const all: CountriesType[] = await api.getAllCountries();
    setCountrie(all);
    console.log(countrie);
  };

  return (
    <Style.HomeStructure>
      <Style.SearchAndFilterArea>
        <Search />
        <Filter />
      </Style.SearchAndFilterArea>
      <Style.CountriesGrid>
        <CountriesBox countriedata={countrie[1]} />
        <CountriesBox countriedata={countrie[5]} />
        <CountriesBox countriedata={countrie[18]} />
        <CountriesBox countriedata={countrie[26]} />
        <CountriesBox countriedata={countrie[45]} />
        <CountriesBox countriedata={countrie[82]} />
        <CountriesBox countriedata={countrie[223]} />
        <CountriesBox countriedata={countrie[67]} />
      </Style.CountriesGrid>
    </Style.HomeStructure>
  );
};
