import styled from "styled-components";

export const HeaderStructure = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px calc((100% - 90rem) / 2);
  background-color: #fff;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);

  h1 {
    margin-left: 1.25rem;
    font-size: 1.5625rem;
    font-weight: 800;
  }
`;

export const DarkModeArea = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-right: 20px;
`;

export const DarkModeIcon = styled.img`
  max-width: 0.9375rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;
