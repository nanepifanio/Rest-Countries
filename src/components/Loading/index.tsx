import * as Styles from "./LoadingStyle";

type Props = {
  borderCountries?: boolean;
};

export const Loading = ({ borderCountries }: Props) => {
  return (
    <Styles.LoadingStructure borderCountries={borderCountries}>
      Loading...
    </Styles.LoadingStructure>
  );
};
