// Components
import { Link } from "react-router-dom";
import { DescInfo } from "../../components/DescInfo";
import { BorderCountries } from "../../components/BorderCountries";
// icons
import arrow_light from "../../assets/leftarrow-light.svg";
import arrow_dark from "../../assets/leftarrow-dark.svg";
// Style
import * as Styles from "./AboutStyles";
// Personalized Hook
import { useAboutCountrie } from "../../hooks/useAboutCountrie";
import { Loading } from "../../components/Loading";

export const About = () => {
  const aboutCountrie = useAboutCountrie();

  return (
    <>
      {!aboutCountrie && <Loading />}
      {!!aboutCountrie && (
        <Styles.AboutStructure>
          <Link to="/" className="backBtn">
            <Styles.BackButtonIcon src={arrow_light} />
            Back
          </Link>
          <Styles.AboutCountrieArea>
            <Styles.LargeFlagArea>
              <img
                src={aboutCountrie?.flag}
                alt={`${aboutCountrie?.name} Flag`}
              />
            </Styles.LargeFlagArea>
            <div>
              <h2>{aboutCountrie?.name}</h2>
              <Styles.GeneralInfos>
                <div>
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
                  <DescInfo infodata={aboutCountrie?.capital}>
                    Capital:
                  </DescInfo>
                </div>
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
              <div>
                {!!aboutCountrie?.borders && (
                  <BorderCountries borderCountries={aboutCountrie.borders} />
                )}
                {!aboutCountrie?.borders && <div>No Border Countries</div>}
              </div>
            </div>
          </Styles.AboutCountrieArea>
        </Styles.AboutStructure>
      )}
    </>
  );
};
