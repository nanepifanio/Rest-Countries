import styled from "styled-components";

export const CountriesBoxStructure = styled.div`
  background-color: #fff;
  max-width: 18.75rem;
  border-radius: 0.3125rem;
  box-shadow: 0px 0px 0.625rem 0.0625rem rgb(0, 0, 0, 0.05);
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FlagArea = styled.div`
  img {
    max-width: 18.75rem;
    border-radius: 0.3125rem 0.3125rem 0 0;
  }
`;

export const CountrieBoxInfosArea = styled.div`
  padding: 1.25rem 0px 2.1875rem 2.1875rem;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;
