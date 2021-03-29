import {
  Container,
  DivStyled,
  Title,
  SubTitle,
  DivCard,
  DivSubTitle,
} from "./styled";
import Card from "../Card";

const Tecs = () => {
  return (
    <Container>
      <DivStyled>
        <Title id="hardSkills">HardSkills</Title>
        <DivSubTitle>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </SubTitle>
        </DivSubTitle>
      </DivStyled>
      <DivCard>
        <Card />
      </DivCard>
    </Container>
  );
};

export default Tecs;
