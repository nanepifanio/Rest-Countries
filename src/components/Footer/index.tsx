import { useThemeContext } from "../../hooks/useThemeContext";
import * as Styles from "./FooterStyle";

export const Footer = () => {
  const { state } = useThemeContext();

  return (
    <Styles.FooterStructure theme={state.theme.status}>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/profile/nanepifanio">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/nanepifanio">Renan Epifânio</a>.
      </p>
    </Styles.FooterStructure>
  );
};
