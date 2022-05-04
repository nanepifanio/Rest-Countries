// Components
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { CountriesBox } from "../../components/CountriesBox";
import { Link } from "react-router-dom";
// Personalized Hook
import { useRandomCountries } from "../../hooks/useRandomCountries";
// Style
import * as Style from "./HomeStyles";

export const Home = () => {
  const countries = useRandomCountries();

  return (
    <Style.HomeStructure>
      <Style.SearchAndFilterArea>
        <Search />
        <Filter />
      </Style.SearchAndFilterArea>
      <Style.CountriesGrid>
        {countries.map((countrie, index) => {
          return (
            <Link to={`/about/${countrie.name.toLowerCase()}`} key={index}>
              <CountriesBox countriedata={countrie} />
            </Link>
          );
        })}
      </Style.CountriesGrid>
    </Style.HomeStructure>
  );
};
