import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;

  @media (max-width: 905px) {
    width: 95%;
  }
`;

export const SectionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivSubTitle = styled.div`
  @media (max-width: 905px) {
    display: flex;
    justify-content: center;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 300;
  margin: 13px 45px 30px 45px;
  font-size: 1.17rem;
  text-align: center;
`;

export const DivTitle = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: 39px 0 22px 0;
  color: #40c5dc;
  font-weight: bold;
`;

export const Legend = styled.p`
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -100px;
  width: 222px;
  border-radius: 10px;
  background: #40c5dc;
  color: #fff;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  opacity: 0.25;
  -webkit-transition: opacity 0.35s ease-in-out;
  transition: opacity 0.35s ease-in-out;
  cursor: pointer;
  opacity: 1;
`;

export const Image = styled.img``;
