// Helper function
import { formatPopulationNumber } from "../../helpers/formatPopulationNumber";
//Style
import * as Style from "./DescInfoStyle";
import { useThemeContext } from "../../hooks/useThemeContext";

type DescInfoProps = {
  children: React.ReactNode;
  infodata: string | string[] | number | undefined;
};

export const DescInfo = ({ children, infodata }: DescInfoProps) => {
  const { state } = useThemeContext();

  return (
    <Style.DescInfoStructure theme={state.theme.status}>
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
