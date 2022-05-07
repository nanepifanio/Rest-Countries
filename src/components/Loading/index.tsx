import * as Styles from "./LoadingStyle";
import { useThemeContext } from "../../hooks/useThemeContext";

type Props = {
  borderCountries?: boolean;
};

export const Loading = ({ borderCountries }: Props) => {
  const { state } = useThemeContext();

  return (
    <Styles.LoadingStructure
      theme={state.theme.status}
      borderCountries={borderCountries}
    >
      Loading...
    </Styles.LoadingStructure>
  );
};
