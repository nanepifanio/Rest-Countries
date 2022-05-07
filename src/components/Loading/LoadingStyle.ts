import styled, { css } from "styled-components";

type LoadingProps = {
  borderCountries?: boolean;
  theme: string;
};

export const LoadingStructure = styled.div<LoadingProps>`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};

  ${(props) =>
    props.borderCountries &&
    css`
      font-size: 13px;
      font-weight: normal;
      display: inline;
      height: inherit;
    `}
`;
