import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #191919;
  border-bottom: 1px solid #333;
`;
export const Logo = styled.div`
  font-family: "Fredoka One", cursive;
  font-weight: 900;
  margin-left: 8%;
  font-size: 47px;
  cursor: pointer;
  color: var(--color-blue-clear);
`;
export const NavStyled = styled.div`
  display: flex;
  width: 127px;
  justify-content: space-between;
  align-items: center;
  margin-right: 8%;
`;
export const Itens = styled.div`
  cursor: pointer;
`;
