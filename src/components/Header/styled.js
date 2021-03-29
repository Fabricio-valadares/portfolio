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

  @media (max-width: 808px) {
    order: 0;
  }

  @media (max-width: 365px) {
    margin-left: 0;
  }
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

export const DivButton = styled.div`
  margin-right: 8%;

  @media (max-width: 808px) {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  width: 184px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 1rem;
  background-color: var(--color-blue-clear);
  border: none;
  border-radius: 6px;
  color: #333;
  font-weight: 500;
  padding: 10px;
  outline: none;

  @media (max-width: 808px) {
    order: 1;
    width: 124px;
  }

  @media (max-width: 365px) {
    display: none;
  }
`;

export const DivButtonTwo = styled.div`
  display: none;

  @media (max-width: 365px) {
    display: block;
    margin-left: -40px;
  }
`;

export const ButtonTwo = styled.button`
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 1rem;
  background-color: var(--color-blue-clear);
  border: none;
  border-radius: 6px;
  color: #333;
  font-weight: 500;
  padding: 10px;
  outline: none;
`;
