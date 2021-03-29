import Header from "../../components/Header";
import Sobre from "../../components/Sobre";
import Tecs from "../../components/Tecs";
import Aviso from "../../components/Aviso";
import Historia from "../../components/Historia";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Artigo from "../../components/Artigo";
import { ContainerMain } from "./styled";

const Home = () => {
  return (
    <ContainerMain>
      <Header />
      <Sobre />
      <Aviso />
      <Historia />
      <Projects />
      <Artigo />
      <Tecs />
      <Footer />
    </ContainerMain>
  );
};

export default Home;
