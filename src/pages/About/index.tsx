import { Link, useParams } from "react-router-dom";
import arrow_light from "../../assets/leftarrow-light.svg";
import arrow_dark from "../../assets/leftarrow-dark.svg";
import { CountriesType } from "../../types/types";
import * as Styles from "./AboutStyles";
import { DescInfo } from "../../components/DescInfo";
import { BorderCountries } from "../../components/BorderCountries";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

export const About = () => {
  const [aboutCountrie, setAboutCountrie] = useState<CountriesType>();
  const countrieName = useParams();

  useEffect(() => {
    getCountrieByName();
  }, []);

  const getCountrieByName = async (): Promise<void> => {
    const countrie: CountriesType[] = await api.searchCountry(
      countrieName.countrie
    );
    setAboutCountrie(countrie[0]);
    console.log(countrie[0].borders);
  };

  return (
    <Styles.AboutStructure>
      <Link to="/">
        <Styles.BackButtonIcon src={arrow_light} />
        Back
      </Link>
      <Styles.AboutCountrieArea>
        <Styles.LargeFlagArea>
          <img src={aboutCountrie?.flag} alt={`${aboutCountrie?.name} Flag`} />
        </Styles.LargeFlagArea>
        <Styles.AboutArea>
          <h2>{aboutCountrie?.name}</h2>
          <Styles.GeneralInfos>
            <Styles.LeftInfos>
              <DescInfo infodata={aboutCountrie?.nativeName}>
                Native Name:
              </DescInfo>
              <DescInfo infodata={aboutCountrie?.population}>
                Population:
              </DescInfo>
              <DescInfo infodata={aboutCountrie?.region}>Region:</DescInfo>
              <DescInfo infodata={aboutCountrie?.subregion}>
                Sub Region:
              </DescInfo>
              <DescInfo infodata={aboutCountrie?.capital}>Capital:</DescInfo>
            </Styles.LeftInfos>
            <Styles.RightInfos>
              <DescInfo infodata={aboutCountrie?.topLevelDomain}>
                Top Level Domain:
              </DescInfo>
              <DescInfo
                infodata={aboutCountrie?.currencies.map((cur) => cur.name)}
              >
                Currencies:
              </DescInfo>
              <DescInfo
                infodata={aboutCountrie?.languages.map((lang) => lang.name)}
              >
                Languages:
              </DescInfo>
            </Styles.RightInfos>
          </Styles.GeneralInfos>
          <Styles.BorderCountriesArea>
            <BorderCountries
              borderCountries={aboutCountrie?.borders as string[]}
            />
          </Styles.BorderCountriesArea>
        </Styles.AboutArea>
      </Styles.AboutCountrieArea>
    </Styles.AboutStructure>
  );
};
