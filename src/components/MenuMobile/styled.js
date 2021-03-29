import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  display: none;

  @media (max-width: 808px) {
    display: block;
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: #40c5dc !important;
`;
