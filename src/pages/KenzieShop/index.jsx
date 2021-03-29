import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  SectionCarousel,
  MainStyled,
  Card,
  Text,
  DivImage,
  DivText,
  Dow,
  Animation,
} from "./styled";

const KenzieHub = () => {
  return (
    <Container>
      <Header />

      <MainStyled>
        <SectionCarousel showStatus={false} useKeyboardArrows={true}>
          <Carousel>
            <div>
              <img src="./assets/KenzieShop/kenzieshop1.png" />
            </div>
            <div>
              <img src="./assets/KenzieShop/kenzieshop2.png" />
            </div>
          </Carousel>
        </SectionCarousel>
      </MainStyled>
      <Animation>
        <Dow />
      </Animation>
      <Card>
        <DivImage></DivImage>
        <DivText>
          <div
            style={{ margin: "20px 0", fontSize: "1.6rem", color: "#40c5dc" }}
          >
            Experiencia em fazer esse projeto !
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
        </DivText>
      </Card>

      <Footer />
    </Container>
  );
};

export default KenzieHub;
