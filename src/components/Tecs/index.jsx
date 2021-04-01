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
        <Title id="hardSkills">Tecnologia</Title>
        <DivSubTitle>
          <SubTitle>Algumas tecnologias que tive mais contato !</SubTitle>
        </DivSubTitle>
      </DivStyled>
      <DivCard>
        <Card />
      </DivCard>
    </Container>
  );
};

export default Tecs;
