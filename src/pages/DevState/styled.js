import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SectionCarousel = styled.section`
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

export const MainStyled = styled.main`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border-left: 1px solid #333;

  display: flex;
  width: 80%;
  height: 400px;
`;

export const DivText = styled.div`
  width: 600px;
  padding: 20px 0 0 20px;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #333;

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
  /* padding-top: 20px; */
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
  margin-top: -46px;

  text-align: center;
`;
