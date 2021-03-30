import {
  Container,
  DivText,
  DivImage,
  Image,
  Title,
  Text,
  Button,
  FaGithubStyled,
  AStyled,
  DivContent,
  DivButton,
} from "./styled";

const Sobre = () => {
  return (
    <Container>
      <DivText>
        <DivContent>
          <Title>Desenvolvedor Front-End</Title>
          <Text>
            Fico muito feliz ao dizer que sou um programador Front-End, porque
            me tornar um programador era uns dos meus sonhos, que hoje e
            realidade!
          </Text>
          <DivButton>
            <Button>
              <FaGithubStyled />
              <AStyled
                href="https://github.com/Fabricio-valadares"
                target="_blank"
              >
                Conhecer Github
              </AStyled>
            </Button>
          </DivButton>
        </DivContent>
      </DivText>

      <DivImage>
        <Image />
      </DivImage>
    </Container>
  );
};

export default Sobre;
