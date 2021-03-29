import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #333;
  width: 100%;
  height: 490px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1012px) {
    height: auto;
  }
`;

export const Name = styled.p`
  display: block;
  font-size: 0.9em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 300;
`;
export const CardStyled = styled.div`
  border: 1px solid #333;
  text-align: center;
  margin: 10px 20px;
  width: 292px;
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 440px) {
    width: 131px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #40c5dc;

  @media (max-width: 1012px) {
    margin-top: 39px;
  }
`;

export const DivCard = styled.div`
  display: flex;

  @media (max-width: 1012px) {
    flex-wrap: wrap;
    justify-content: center;

    &:last-child {
      margin-bottom: 39px;
    }
  }
`;

export const SubTitle = styled.h3`
  font-weight: 300;
  margin: 18px 0;
  font-size: 1.17rem;
  padding: 0px 45px;
  text-align: center;
`;

export const Button = styled.a`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 166px;
  height: 30px;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-weight: bold;
  margin: 20px 0;

  background-color: var(--color-blue-clear);
`;
