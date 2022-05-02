import styled from "styled-components";

export const HeaderStructure = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem calc((100% - 90rem) / 2);

  div {
    display: flex;
    align-items: center;
  }
`;

export const DarkMode = styled.img`
  max-width: 1.25rem;
  margin-right: 0.625rem;
`;
