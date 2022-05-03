import { DescInfo } from "../DescInfo";
import * as Style from "./CountriesBoxStyle";
import { CountriesType } from "../../types/types";

type Props = {
  countriedata: CountriesType | undefined;
};

export const CountriesBox = ({ countriedata }: Props) => {
  return (
    <Style.CountriesBoxStructure>
      <Style.FlagArea>
        <img src={countriedata?.flags.svg} alt="" />
      </Style.FlagArea>
      <Style.CountrieBoxInfosArea>
        <h2>{countriedata?.name.common}</h2>
        <DescInfo infodata={countriedata?.population}>Population:</DescInfo>
        <DescInfo infodata={countriedata?.region}>Region:</DescInfo>
        <DescInfo infodata={countriedata?.capital[0]}>Capital:</DescInfo>
      </Style.CountrieBoxInfosArea>
    </Style.CountriesBoxStructure>
  );
};
