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
            Olá tudo bem ?<br /> <br /> Meu nome e <i>Fabricio Valadares</i>, e
            minha história com programação não tem muito tempo, Alias tem
            exatamente 6 meses, isso mesmo apens 6 meses, mas eu sempre tive
            interrece por criar software, mas eu achava que isso era muito
            dificil, porque toda vez que tentei aprender sozinho, eu não dava
            conta de
            {/* desenrolar um problena usando código, então eu desistir e segui
            outros caminhos, mas a o sonho de construir software nao saia de
            mim, então eu desidir começar a estudar novamente, mas agora
            procurando uma ajuda. */}
            <br />
          </Text>
          <Text>
            E nesse proceso de buscar ajuda eu encontrei a kenzie Academy
            Brasil, onde eu posso dizer que aprendir a programar, onde eu
            construr diversos projetos, onde eu trabalhei em grupo com varias
            pessoas, aprendi como e feito o processo de contrustrução de um
            software, e me desenvolvi muito como lider e também sendo liderado
            {/* pelos meus colegar, durante os trabalhos em grupo, onde como costume
            usavamos a metodologia ageis como o scrum, usavamos também kanbam,
            entre vaias outras ferramentas de organizção. */}
          </Text>
        </DivText>
      </Card>
    </Container>
  );
};

export default Historia;
