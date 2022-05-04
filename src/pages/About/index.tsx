import { Link } from "react-router-dom";
import arrow_light from "../../assets/leftarrow-light.svg";
import arrow_dark from "../../assets/leftarrow-dark.svg";
import * as Styles from "./AboutStyles";
import { DescInfo } from "../../components/DescInfo";

export const About = () => {
  return (
    <Styles.AboutStructure>
      <Link to="/">
        <Styles.BackButtonIcon src={arrow_light} />
        Back
      </Link>
      <Styles.AboutCountrieArea>
        <Styles.LargeFlagArea>
          <img src="" alt="" />
        </Styles.LargeFlagArea>
        <Styles.AboutArea>
          <h2>...</h2>
          <Styles.GeneralInfos>
            <Styles.LeftInfos>
              {/* <DescInfo infodata={}>Native Name:</DescInfo>
              <DescInfo infodata={}>Population:</DescInfo>
              <DescInfo infodata={}>Region:</DescInfo>
              <DescInfo infodata={}>Sub Region:</DescInfo>
              <DescInfo infodata={}>Capital:</DescInfo> */}
            </Styles.LeftInfos>
            <Styles.RightInfos>
              {/* <DescInfo infodata={}>Top Level Domain:</DescInfo>
              <DescInfo infodata={}>Currencies:</DescInfo>
              <DescInfo infodata={}>Languages:</DescInfo> */}
            </Styles.RightInfos>
          </Styles.GeneralInfos>
          <Styles.BorderCountriesArea></Styles.BorderCountriesArea>
        </Styles.AboutArea>
      </Styles.AboutCountrieArea>
    </Styles.AboutStructure>
  );
};
