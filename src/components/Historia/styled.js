import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #333;

  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1070px) {
    height: auto;
  }
`;

export const Card = styled.div`
  border-left: 1px solid #333;

  display: flex;
  width: 80%;
  height: 400px;

  @media (max-width: 1070px) {
    height: auto;
  }
`;

export const DivText = styled.div`
  width: 600px;
  padding: 20px 0 0 20px;
  overflow: auto;

  ::-webkit-scrollbar-track {
    background: #1a191c;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: #3e3e41;
    border-radius: 5px;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  @media (max-width: 1070px) {
    &:last-child {
      margin-bottom: 20px;
    }
  }
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
  margin-top: 17px;
`;
