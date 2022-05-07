import styled from "styled-components";

type CountriesBoxProps = {
  theme: string;
};

export const CountriesBoxStructure = styled.div<CountriesBoxProps>`
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  border-radius: 0.3125rem;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem rgb(0, 0, 0, 0.05);
  transition: all ease 0.3s;
  cursor: pointer;
  max-height: 24.375rem;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FlagArea = styled.div`
  img {
    width: 18.125rem;
    height: 11.25rem;
    object-fit: cover;
    border-radius: 0.3125rem 0.3125rem 0 0;
  }
`;

export const CountrieBoxInfosArea = styled.div`
  padding: 1.25rem 1rem 2.1875rem 2.1875rem;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
`;
