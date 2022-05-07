import styled from "styled-components";

type SearcStylesProps = {
  theme: string;
};

export const SearchArea = styled.div<SearcStylesProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  padding: 0.9375rem;
  box-shadow: 0rem 0px 0.625rem 0.0625rem rgb(0, 0, 0, 0.05);
  border-radius: 0.3125rem;

  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

export const SearchIcon = styled.img`
  max-width: 1.25rem;
  cursor: pointer;
`;

export const SearchInput = styled.input<SearcStylesProps>`
  margin-left: 1.25rem;
  border: none;
  padding: 0.3125rem;
  outline: none;
  width: 25rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
  color: ${(props) => (props.theme === "light" ? "hsl(0, 0%, 70%)" : "#fff")};

  &::placeholder {
    color: ${(props) => (props.theme === "light" ? "hsl(0, 0%, 70%)" : "#fff")};
  }

  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;
