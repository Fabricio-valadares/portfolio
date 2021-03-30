import { Container, Card, DivText, DivImage, Text } from "./styled";

const Historia = () => {
  return (
    <Container id="history">
      <Card>
        <DivImage>
          <img
            style={{ width: 300 }}
            src="./assets/un6.svg"
            alt="image-random"
          />
        </DivImage>

        <DivText>
          <div
            style={{ margin: "20px 0", fontSize: "1.6rem", color: "#40c5dc" }}
          >
            Sobre min
          </div>
          <Text>
            Olá tudo bem ?<br />
            <br />
            Meu nome é Fabricio Valadares, sou goiano, tenho 21 anos, sou
            apaixonado por livros, programação, e tenho uma grande empolgação
            por empreendedorismo e educação financeira. <br /> <br /> Gosto
            muito de conversar sobre produto, negócios e principalmente sobre
            inovação, porque acredito que uma empresa pode mudar o mundo para
            melhor com um produto fácil de usar e que resolva um problema comum
            entre um determinado grupo de pessoas.
          </Text>
          <Text>
            Hoje me dedico a estudar programação, pois vejo que essa habilidade
            nos proporciona criar ferramentas, produtos que podem ajudar muita
            gente a atingir seus objetivos.
            <br /> <br /> Meus planos para daqui 5 anos, que seria 2024 e me
            tornar um programador sênior, está liderando uma equipe de
            desenvolvimento e trabalhando com um produto revolucionário, não
            precisar se um ifood ou uber, mas que seja um produto que faça
            diferença na vida das pessoas.
          </Text>
        </DivText>
      </Card>
    </Container>
  );
};

export default Historia;
