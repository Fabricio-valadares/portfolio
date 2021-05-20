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
        <SectionCarousel>
          <Carousel showStatus={false} useKeyboardArrows={true}>
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
            Experiência em fazer esse projeto !
          </div>
          <Text>
            Fazer esse projeto foi uma experiência muito legal, porque a
            principal função dessa aplicação e persistir os dados dos produtos,
            que o cliente colocou no carrinho dentro da aplicação, mesmo se ele
            sair do site os produtos escolhidos continuaram no carrinho, e isso
            antes de você saber como é feito pode parecer complexo, mas na
            verdade é muito fácil, então fazer algo que eu vejo em muito site,
            foi muito empolgante.
          </Text>
        </DivText>
      </Card>

      <Footer />
    </Container>
  );
};

export default KenzieHub;
