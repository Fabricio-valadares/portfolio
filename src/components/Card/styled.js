import styled from "styled-components";

export const CardIten = styled.div`
  display: flex;
  padding: 0 100px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 769px) {
    padding: 0;
  }
`;
export const Icons = styled.div``;
export const Name = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
export const CardStyled = styled.div`
  border: 1px solid #333;
  padding: 31px;
  text-align: center;
  margin: 10px 20px;
  width: 172px;

  @media (max-width: 440px) {
    width: 131px;
  }
`;
