// Components
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { CountriesBox } from "../../components/CountriesBox";
// Personalized Hook
import { useAllCountries } from "../../hooks/useAllCountries";
// Helper Function
import { randomizeCountries } from "../../helpers/randomizeCountries";
// Style
import * as Style from "./HomeStyles";

export const Home = () => {
  const countries = useAllCountries();

  return (
    <Style.HomeStructure>
      <Style.SearchAndFilterArea>
        <Search />
        <Filter />
      </Style.SearchAndFilterArea>
      <Style.CountriesGrid>
        {randomizeCountries(countries).map((countrie, index) => {
          return <CountriesBox key={index} countriedata={countrie} />;
        })}
      </Style.CountriesGrid>
    </Style.HomeStructure>
  );
};
