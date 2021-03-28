import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #333;

  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
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

  width: 400px;

  @media (max-width: 905px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-weight: 300;
  line-height: 1.5;
`;
