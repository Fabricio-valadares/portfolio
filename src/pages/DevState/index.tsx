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
} from "./styled";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";

const DevState = () => {
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
              <img src="./assets/DevState/devstate1.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate4.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate5.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate2.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate3.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate9.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate6.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate7.png" />
            </div>
            <div>
              <img src="./assets/DevState/devstate8.png" />
            </div>
          </Carousel>
        </SectionCarousel>
      </MainStyled>
      <Card>
        <DivImage></DivImage>
        <DivText>
          <div
            style={{ margin: "20px 0", fontSize: "1.6rem", color: "#40c5dc" }}
          >
            Experiência em fazer esse projeto !
          </div>
          <Text>
            Desenvolver esse projeto foi uma experiência muito boa, porque nele
            eu aprendi como começar um projeto do zero de uma forma eficiente, e
            também internalizar que planejar antes de começar escrever qualquer
            linha código, faz toda diferença durante o desenvolvimento do
            projeto. E que tal organização proporciona uma diversão durante a
            construção do software, e que ao contrário um projeto pode se tornar
            um problema, então planejamento, organização, força de vontade,
            prazo estabelecido e de extrema importância para a programação.
          </Text>
        </DivText>
      </Card>

      <Footer />
    </Container>
  );
};

export default DevState;
