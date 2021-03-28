import {
  Container,
  CardStyled,
  Name,
  Image,
  DivStyled,
  Title,
  SubTitle,
  DivCard,
  Button,
} from "./styled";

const Artigo = () => {
  return (
    <Container id="artigos">
      <DivStyled>
        <Title>Artigos</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </SubTitle>
      </DivStyled>
      <DivCard>
        <CardStyled>
          <Image style={{ backgroundImage: "url(./assets/artOne.jpg)" }} />
          <Name>TAGs importantes para estruturar uma pagina HTML</Name>
          <div>
            <Button
              href="https://kenzie.com.br/blog/tags-html/"
              target="_blank"
            >
              Ler mais
            </Button>
          </div>
        </CardStyled>
        <CardStyled>
          <Image style={{ backgroundImage: "url(./assets/artTwo.jpg)" }} />
          <Name>Estrutura básica de uma pagina HTML</Name>
          <div>
            <Button
              href="https://kenzie.com.br/blog/estrutura-html/"
              target="_blank"
            >
              Ler mais
            </Button>
          </div>
        </CardStyled>
        <CardStyled>
          <Image style={{ backgroundImage: "url(./assets/artThreen.jpg)" }} />
          <Name>
            GitLab Pages: Publique seu site em uma hospedagem gratuita
          </Name>
          <div>
            <Button
              href="https://kenzie.com.br/blog/hospedar-pagina-gitlab/"
              target="_blank"
            >
              Ler mais
            </Button>
          </div>
        </CardStyled>
      </DivCard>
    </Container>
  );
};

export default Artigo;
