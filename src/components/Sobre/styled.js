import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #333;

  /* background-image: url("./assets/asd.jpg");
  background-size: contain; */

  @media (max-width: 905px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  padding: 0 45px;
  font-variant: small-caps;
  font-size: 3rem;
  font-weight: 500;
  margin: 15px 0 20px 0;

  background: -webkit-radial-gradient(#eee, var(--color-blue-clear));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 769px) {
    font-size: 2.6rem;
  }
`;
export const Text = styled.p`
  padding: 0 45px;
  line-height: 25px;
  font-weight: 300;
`;

export const Image = styled.div`
  width: 295px;
  height: 316px;
  border-radius: 29px 0 29px 0;

  background-image: url("./assets/im.jpeg");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 769px) {
    width: 275px;
    margin: 0 15px;
    height: 286px;
    border-radius: 29px 0 29px 0;
  }
`;

export const DivText = styled.div`
  width: 500px;
  height: 400px;
  flex-direction: column;
  justify-content: center;

  display: flex;

  @media (max-width: 905px) {
    width: 100%;
    height: auto;
    align-items: center;
    margin-bottom: 20px;

    order: 1;
  }
`;

export const Button = styled.button`
  width: 184px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45px;
  font-size: 1rem;
  background-color: var(--color-blue-clear);
  border: none;
  border-radius: 6px;
  color: #333;
  font-weight: 500;
  padding: 10px;
  margin: 37px 0 0 45px;

  &:hover {
    background-image: linear-gradient(
      var(--color-blue-clear),
      var(--color-blue-etc)
    );
  }

  @media (max-width: 769px) {
    margin: 20px 0 15px 0;
  }
`;

export const FaGithubStyled = styled(FaGithub)`
  font-size: 32px;
`;

export const DivImage = styled.div`
  width: 500px;
  height: 400px;
  align-items: center;
  border-left: 1px solid #333;
  border-right: 1px solid #333;

  display: flex;
  justify-content: center;

  @media (max-width: 905px) {
    width: 100%;
    order: 0;
  }
`;
