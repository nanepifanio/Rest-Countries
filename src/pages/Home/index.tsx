// Components
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { CountriesBox } from "../../components/CountriesBox";
import { Link } from "react-router-dom";
// Personalized Hook
import { useCountries } from "../../hooks/useCountries";
// Style
import * as Style from "./HomeStyles";
import { Loading } from "../../components/Loading";
import { useThemeContext } from "../../hooks/useThemeContext";

export const Home = () => {
  const countries = useCountries();
  const { state } = useThemeContext();

  return (
    <>
      {!countries?.length && <Loading />}
      {!!countries?.length && (
        <Style.HomeStructure theme={state.theme.status}>
          <Style.SearchAndFilterArea>
            <Search />
            <Filter />
          </Style.SearchAndFilterArea>
          {!!countries[0]?.status && (
            <div className="notFound">Country not found</div>
          )}
          <Style.CountriesGrid>
            {countries.map((countrie, index) => {
              return (
                <>
                  {/* {!!countrie?.status && (
                    <div className="notFound">Country not found</div>
                  )} */}
                  {!countrie?.status && (
                    <Link
                      to={`/about/${countrie?.name?.toLowerCase()}`}
                      key={index}
                    >
                      <CountriesBox countriedata={countrie} />
                    </Link>
                  )}
                </>
              );
            })}
          </Style.CountriesGrid>
        </Style.HomeStructure>
      )}
    </>
  );
};
