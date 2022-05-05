// Helper function
import { formatPopulationNumber } from "../../helpers/formatPopulationNumber";
//Style
import * as Style from "./DescInfoStyle";

type DescInfoProps = {
  children: React.ReactNode;
  infodata: string | string[] | number | undefined;
};

export const DescInfo = ({ children, infodata }: DescInfoProps) => {
  return (
    <Style.DescInfoStructure>
      <span className="desc">{children}</span>
      {infodata instanceof Array && (
        <span className="info">{infodata.join(", ")}</span>
      )}
      {(typeof infodata === "string" || typeof infodata === "number") && (
        <span className="info">
          {typeof infodata === "number"
            ? formatPopulationNumber(infodata)
            : infodata}
        </span>
      )}
    </Style.DescInfoStructure>
  );
};
