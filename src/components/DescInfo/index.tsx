// Helper function
import { formatPopulationNumber } from "../../helpers/formatPopulationNumber";
//Style
import * as Style from "./DescInfoStyle";

type DescInfoProps = {
  children: React.ReactNode;
  infodata: string | number | undefined;
};

export const DescInfo = ({ children, infodata }: DescInfoProps) => {
  return (
    <Style.DescInfoStructure>
      <span className="desc">{children}</span>
      <span className="info">
        {typeof infodata === "number"
          ? formatPopulationNumber(infodata)
          : infodata}
      </span>
    </Style.DescInfoStructure>
  );
};
