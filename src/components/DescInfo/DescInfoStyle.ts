import styled from "styled-components";

type DescInfoProps = {
  theme: string;
};

export const DescInfoStructure = styled.div<DescInfoProps>`
  margin-bottom: 0.625rem;

  .desc {
    font-weight: 600;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  }

  .info {
    margin-left: 0.3125rem;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  }
`;
