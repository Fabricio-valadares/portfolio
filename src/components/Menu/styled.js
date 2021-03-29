import styled from "styled-components";

export const NavStyled = styled.div`
  display: flex;
  width: 227px;
  justify-content: space-between;
  align-items: center;
  margin-right: 8%;

  @media (max-width: 808px) {
    display: none;
  }
`;
export const Itens = styled.div`
  display: flex;
  width: 300px;
  font-weight: 300;
  font-size: 1.1rem;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #40c5dc;
    border-radius: 0 0 3px 3px;
  }
`;
