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
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const KenzieHub = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-141689343-1");

    ReactGA.pageview(location.pathname);
  }, []);

  return (
    <Container>
      <Header />

      <MainStyled>
        <SectionCarousel>
          <Carousel showStatus={false} useKeyboardArrows={true}>
            <div>
              <img src="./assets/KenzieHub/kenziehub1.png" />
            </div>
            <div>
              <img src="./assets/KenzieHub/kenziehub2.png" />
            </div>
            <div>
              <img src="./assets/KenzieHub/kenziehub3.png" />
            </div>
            <div>
              <img src="./assets/KenzieHub/kenziehub4.png" />
            </div>
            <div>
              <img src="./assets/KenzieHub/kenziehub5.png" />
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
            Minha experiência nesse projeto foi muito surpreendente, porque meu
            computador estragou bem na hora em que comecei a fazer tal projeto,
            e eu tive que deixar ele em manutenção, mas eu queria muito fazer
            tal projeto, então eu pesquisei bastante um computador usado e
            barato, para comprar, e nesse processo eu acabei ficando com uma
            máquina com um processador celeron, 2 gb de memória entre outros
            detalhes, pois nesse momento era o que meu dinheiro dava para
            comprar. <br /> E foi um momento de muito aprendizado, porque eu
            estava aprendendo a usar os hooks do react, como useEffect para
            fazer requisição à api, e um erro, um código mal planejado fazia a
            máquina trava, então para finalizar a história eu me desenvolvi
            bastante como programador, porque a cada linha eu tinha que pensar o
            que estava fazendo e como isso afetaria minha aplicação, e o bom
            disso tudo é que desenvolvi uma habilidade muito importante para um
            programador, que é pensar antes de escrever o código.
          </Text>
        </DivText>
      </Card>

      <Footer />
    </Container>
  );
};

export default KenzieHub;
