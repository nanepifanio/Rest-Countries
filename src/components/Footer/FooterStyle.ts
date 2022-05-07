import styled from "styled-components";

type FooterStyleProps = {
  theme: string;
};

export const FooterStructure = styled.footer<FooterStyleProps>`
  padding: 1.25rem calc((100% - 90rem) / 2);
  text-align: center;
  font-size: 0.8125rem;
  letter-spacing: 0.1rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  box-shadow: 0 0 0.1875rem rgb(0, 0, 0, 0.3);

  a {
    color: ${(props) =>
      props.theme === "light" ? "hsl(0, 0%, 70%)" : "hsl(0, 0%, 50%)"};
  }
`;
