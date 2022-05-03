import styled from "styled-components";

export const HomeStructure = styled.main`
  padding: 2.5rem calc((100% - 90rem) / 2);
`;

export const SearchAndFilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
`;

export const CountriesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 2.5rem;
  padding: 2.5rem 1.25rem;
`;
