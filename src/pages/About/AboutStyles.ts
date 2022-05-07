import styled from "styled-components";

type AboutProps = {
  theme: string;
};

export const AboutStructure = styled.section<AboutProps>`
  padding: 2.5rem calc((100% - 90rem) / 2);
  margin: 0 1.25rem;
  height: 100vh;

  @media (max-width: 60rem) {
    height: 100%;
  }

  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};

  .backBtn {
    padding: 0.625rem 0;
    max-width: 8.125rem;
    background-color: ${(props) =>
      props.theme === "light" ? "#fff" : "hsl(209, 23%, 22%)"};
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3125rem;
    box-shadow: 0rem 0rem 0.4rem 0rem rgb(0, 0, 0, 0.3);
    margin-bottom: 2.5rem;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.4;
    }
  }
`;

export const BackButtonIcon = styled.img`
  max-width: 1.125rem;
  margin-right: 0.625rem;
`;

export const AboutCountrieArea = styled.div<AboutProps>`
  display: grid;
  grid-template-columns: repeat(2, minmax(18.75rem, 31.25rem));
  align-items: center;
  justify-content: center;
  gap: 2.5rem 6.25rem;

  @media (max-width: 60rem) {
    grid-template-columns: minmax(18.75rem, 31.25rem);
  }
`;

export const LargeFlagArea = styled.div`
  height: 25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 31.5625rem) {
    height: auto;
  }
`;

export const GeneralInfos = styled.div`
  display: flex;
  margin: 1.875rem 0rem 2.5rem 0rem;
  justify-content: space-between;

  @media (max-width: 31.5625rem) {
    display: block;
  }
`;

export const RightInfos = styled.div`
  @media (max-width: 31.5625rem) {
    margin-top: 40px;
  }
`;
