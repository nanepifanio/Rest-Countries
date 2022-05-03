import styled from "styled-components";

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.05);
  border-radius: 5px;
`;

export const SearchIcon = styled.img`
  max-width: 20px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  margin-left: 20px;
  border: none;
  padding: 5px;
  outline: none;
  width: 400px;
  color: hsl(0, 0%, 70%);

  &::placeholder {
    color: hsl(0, 0%, 70%);
  }
`;
