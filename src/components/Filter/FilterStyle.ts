import styled from "styled-components";

export const Select = styled.select`
  display: flex;
  outline: none;
  border: none;
  padding: 1.25rem;
  width: 12.5rem;
  box-shadow: 0rem 0rem 0.625rem 0.0625rem rgb(0, 0, 0, 0.05);
  border-radius: 0.3125rem;

  @media (max-width: 48rem) {
    margin-top: 2.7rem;
  }
`;
