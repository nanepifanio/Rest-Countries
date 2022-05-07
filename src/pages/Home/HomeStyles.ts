import styled from "styled-components";

export const HomeStructure = styled.main`
  padding: 2.5rem calc((100% - 90rem) / 2);

  @media (max-width: 31.25rem) {
    padding-top: 1.875rem;
  }
`;

export const SearchAndFilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

export const CountriesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 18.125rem));
  gap: 4rem 2.5rem;
  padding: 2.5rem 1.25rem;
  justify-content: space-between;
  /* grid-template-rows: repeat(auto-fit, minmax(auto, 24.375rem)); */

  .notFound {
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 48rem) {
    grid-template-columns: 18.125rem;
    justify-content: center;
    row-gap: 2.5rem;
  }

  @media (max-width: 31.25rem) {
    grid-template-rows: repeat(auto-fit, auto);
  }
`;
