import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container, SectionStyle, DivTitle, Title, SubTitle } from "./styled";
import { useHistory } from "react-router-dom";

const Projects = () => {
  const history = useHistory();

  return (
    <SectionStyle id="projects">
      <DivTitle>
        <Title>Projetos</Title>
        <SubTitle>Avançe no Slid e clique no Botão sabe mais !</SubTitle>
      </DivTitle>
      <Container>
        <Carousel showThumbs={false}>
          <div onClick={() => history.push("/devstate")}>
            <img src="./assets/one1.png" />
            <p
              style={{ backgroundColor: "#40c5dc", width: 100 }}
              className="legend"
            >
              Saiba Mais !
            </p>
          </div>
          <div>
            <img src="./assets/two.png" />
            <p style={{ backgroundColor: "#1b1b1bb8" }} className="legend">
              Legend 2
            </p>
          </div>
          <div>
            <img src="./assets/threen.png" />
            <p style={{ backgroundColor: "#1b1b1bb8" }} className="legend">
              Legend 2
            </p>
          </div>
          <div>
            <img src="./assets/for.png" />
            <p style={{ backgroundColor: "#40c5dc" }} className="legend">
              <a
                style={{ color: "#fff", fontSize: "16px" }}
                href="https://google.com"
              >
                Saiba mais
              </a>
            </p>
          </div>
        </Carousel>
      </Container>
    </SectionStyle>
  );
};

export default Projects;
