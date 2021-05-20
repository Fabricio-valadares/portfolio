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
  DivSubTitle,
} from "./styled";

const Article = () => {
  return (
    <Container id="artigos">
      <DivStyled>
        <Title>Artigos</Title>
        <DivSubTitle>
          <SubTitle>Essa seção é para você que gosta de ler !</SubTitle>
        </DivSubTitle>
      </DivStyled>
      <DivCard>
        <CardStyled>
          <Image
            style={{ backgroundImage: "url(./assets/Article/artOne.jpg)" }}
          />
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
          <Image
            style={{ backgroundImage: "url(./assets/Article/artTwo.jpg)" }}
          />
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
          <Image
            style={{ backgroundImage: "url(./assets/Article/artThreen.jpg)" }}
          />
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

export default Article;
