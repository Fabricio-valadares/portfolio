import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  padding-bottom: 30px;
  width: 100%;
  border-top: 1px solid #333;
  /* border-right: 1px solid #333;
  border-bottom: 1px solid #333; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivCard = styled.div``;
export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2em;
  margin: 60px 0 0 0;
  font-weight: bold;
  color: #40c5dc;
`;

export const DivSubTitle = styled.div`
  @media (max-width: 905px) {
    display: flex;
    justify-content: center;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 300;
  font-size: 1.17rem;
  margin: 13px 45px 30px 45px;
  text-align: center;
`;
