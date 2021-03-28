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
            Olá tudo bem ? Meu nome e Fabricio Valadares, e minha história com
            programação não tem muito tempo, Alias tem exatamente 6 meses, isso
            mesmo apens 6 meses, mas eu sempre tive interrece por software, mas
            eu achava que isso era muito dificil e que não era para mim, porque
            toda vez que tentei aprender sozinho, eu não dava conta de resolver
            nenhum problema usando código, então eu segui outros caminhos, mas a
            o sonho de construir um site nao saia de mim, então eu desidir
            começar a estudar novamente, mas agora procurando uma ajuda,
            perfomce.
          </Text>
          <Text>
            e nesse proceso de buscar ajuda eu encontrei a kenzie Academy
            Brasil, onde eu posso dizer que aprendir a programar, onde eu
            construr diversos prjetos, onde eu trabalhei em grupo varias vezes,
            aprendi a como e feitp o processo de controstrução de um software, e
            me me desenvolvi muito como lider e também sendo liderado pelos meus
            colegar, durante os trabalhos em grupo, onde como costume usavamos a
            metodologia agel scrum, usavamos também kanbam, entre vaias outras
            ferramentas de organizção e
          </Text>
        </DivText>
      </Card>
    </Container>
  );
};

export default Historia;
