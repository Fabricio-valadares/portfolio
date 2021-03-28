import {
  Container,
  DivText,
  DivImage,
  Image,
  Title,
  Text,
  Button,
  FaGithubStyled,
} from "./styled";

const Sobre = () => {
  return (
    <Container>
      <DivText>
        <Title>Desenvolvedor Front-End</Title>
        <Text>
          Fico muito feliz ao dizer que sou um programador Front-End, porque me
          tornar um programador era uns dos meus sonhos, que hoje e realidade!
        </Text>
        <Button>
          <FaGithubStyled />
          <a href="https://github.com/Fabricio-valadares" target="_blank">
            Conhecer Github
          </a>
        </Button>
      </DivText>
      <DivImage>
        <Image />
      </DivImage>
    </Container>
  );
};

export default Sobre;
