import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export const Container = styled.div`
  /* border-top: 1px solid #333; */
  border-bottom: 1px solid #333;
  padding-top: 30px;

  width: 100%;
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 905px) {
    height: 184px;
  }
`;

export const Dow = styled(FiChevronDown)`
  padding-top: 20px;
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
  /* height: 60px; */

  text-align: center;
`;

export const Text = styled.p`
  font-weight: 300;
  font-variant: petite-caps;
  width: 80%;
  text-align: center;
  line-height: 1.5;
`;
