import styled from "styled-components";

type BorderCountries = {
  theme: string;
};

export const BorderCountriesStructure = styled.div`
  span {
    font-weight: 600;

    @media (max-width: 31.5625rem) {
      display: block;
    }
  }

  a {
    font-size: 0.8125rem;
    background-color: ${(props) =>
      props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    border-radius: 0.1875rem;
    box-shadow: 0rem 0rem 0.4rem 0rem rgb(0, 0, 0, 0.05);
    transition: all ease 0.3s;
    display: inline-block;
    padding: 0.3125rem;
    margin-top: 0.625rem;
    margin-right: 0.625rem;

    &:hover {
      opacity: 0.4;
    }
  }
`;
