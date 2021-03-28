import { Container, DivStyled, Title, SubTitle, DivCard } from "./styled";
import Card from "../Card";

const Tecs = () => {
  return (
    <Container>
      <DivStyled>
        <Title id="hardSkills">HardSkills</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </SubTitle>
      </DivStyled>
      <DivCard>
        <Card />
      </DivCard>
    </Container>
  );
};

export default Tecs;
