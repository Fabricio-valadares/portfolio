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
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";

const Hogwarts = () => {
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
              <img src="./assets/Hogwarts/hogwarts2.png" />
            </div>
            <div>
              <img src="./assets/Hogwarts/hogwarts1.png" />
            </div>
            <div>
              <img src="./assets/Hogwarts/hogwarts3.png" />
            </div>
            <div>
              <img src="./assets/Hogwarts/hogwarts4.png" />
            </div>
            <div>
              <img src="./assets/Hogwarts/hogwarts5.png" />
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
            Minha experiência em fazer esse projeto, foi muito boa, porque nesse
            momento eu estava aprendendo a fazer o gerenciamento de estado de
            uma aplicação, e sendo mais específico eu estava aprendendo a usar o
            redux para fazer tal gerenciamento, e como de costume para qualquer
            pessoa que começa a estudar o redux, ficar um pouco perdido nos
            conceitos e super normal, mas com algumas horas estudando você
            consegue fixar cada idéia do redux e tudo fica uma diversão.
            <br /> E nesse projeto foi o que aconteceu para mim, no começo eu
            não sabia bem o que estava fazendo, mas lendo e vendo os erros que
            eu gerava, fui aprendendo como funciona o redux, e no final fiquei
            muito feliz, porque eu saí desse projeto entendo o redux e com um
            projeto legal.
          </Text>
        </DivText>
      </Card>

      <Footer />
    </Container>
  );
};

export default Hogwarts;
