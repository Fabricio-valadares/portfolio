import { Carousel } from "react-responsive-carousel";
import {
  Container,
  SectionStyle,
  DivTitle,
  Title,
  SubTitle,
  Legend,
  Image,
  DivSubTitle,
} from "./styled";
import { useHistory } from "react-router-dom";
import { unstable_concurrentAct } from "react-dom/test-utils";

const Projects = () => {
  const history = useHistory();

  return (
    <SectionStyle id="projects">
      <DivTitle>
        <Title>Projetos</Title>
        <DivSubTitle>
          <SubTitle>Avançe no Slid e clique no Botão sabe mais !</SubTitle>
        </DivSubTitle>
      </DivTitle>
      <Container>
        <Carousel
          showStatus={false}
          useKeyboardArrows={true}
          showThumbs={false}
        >
          <div>
            <Image src="./assets/DevState/devstate2.png" />
            <Legend onClick={() => history.push("/devstate")}>
              Saiba Mais !
            </Legend>
          </div>
          <div>
            <Image src="./assets/KenzieHub/kenziehub1.png" />
            <Legend onClick={() => history.push("/kenziehub")}>
              Saiba Mais !
            </Legend>
          </div>
          <div>
            <Image src="./assets/Hogwarts/hogwarts2.png" />
            <Legend onClick={() => history.push("/hogwarts")}>
              Saiba Mais !
            </Legend>
          </div>
          <div>
            <Image src="./assets/KenzieShop/kenzieshop1.png" />
            <Legend onClick={() => history.push("/kenzieshop")}>
              Saiba Mais !
            </Legend>
          </div>
        </Carousel>
      </Container>
    </SectionStyle>
  );
};

export default Projects;
