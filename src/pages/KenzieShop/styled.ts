import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export const Container = styled.div``;

export const SectionCarousel = styled.section`
  width: 75%;

  .thumbs {
    text-align: center;
  }

  @media (max-width: 905px) {
    width: 95%;
  }
`;

export const MainStyled = styled.main`
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 745px) {
    height: 69%;
  }

  @media (max-width: 570px) {
    height: 58%;
  }

  @media (max-width: 445px) {
    height: 48%;
  }

  @media (max-width: 340px) {
    height: 38%;
  }
`;

export const Card = styled.div`
  border-left: 1px solid #333;
  background-color: #19191b;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0 40px 0;

  @media (max-width: 905px) {
    justify-content: center;
  }
`;

export const DivText = styled.div`
  border-left: 1px solid #333;

  width: 600px;
  padding: 20px 20px 0 20px;
`;

export const DivImage = styled.div`
  width: 250px;

  @media (max-width: 905px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-weight: 300;
  line-height: 1.5;
`;

export const Dow = styled(FiChevronDown)`
  font-size: 41px;
  color: var(--color-blue-clear);
  animation: dow 2s 0.8s infinite alternate;

  @keyframes dow {
    0% {
      transform: translateY(-15px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const Animation = styled.div`
  width: 100%;
  text-align: center;
`;
