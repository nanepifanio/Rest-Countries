import { DescInfo } from "../DescInfo";
import * as Style from "./CountriesBoxStyle";
import { CountriesType } from "../../types/types";
import { clearCountriesName } from "../../helpers/clearCountriesName";

type Props = {
  countriedata: CountriesType | undefined;
};

export const CountriesBox = ({ countriedata }: Props) => {
  return (
    <Style.CountriesBoxStructure>
      <Style.FlagArea>
        <img src={countriedata?.flag} alt="" />
      </Style.FlagArea>
      <Style.CountrieBoxInfosArea>
        <h2>{clearCountriesName(countriedata?.name as string)}</h2>
        <DescInfo infodata={countriedata?.population}>Population:</DescInfo>
        <DescInfo infodata={countriedata?.region}>Region:</DescInfo>
        <DescInfo infodata={countriedata?.capital ?? "Unknown"}>
          Capital:
        </DescInfo>
      </Style.CountrieBoxInfosArea>
    </Style.CountriesBoxStructure>
  );
};
