import Header from "../../components/Header";
import About from "../../components/About";
import Tecs from "../../components/Tecs";
import Notice from "../../components/Notice";
import Story from "../../components/Story";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Article from "../../components/Article";
import { ContainerMain } from "./styled";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-141689343-1");

    ReactGA.pageview(location.pathname);
  }, []);

  return (
    <ContainerMain>
      <Header />
      <About />
      <Notice />
      <Story />
      <Projects />
      <Article />
      <Tecs />
      <Footer />
    </ContainerMain>
  );
};

export default Home;
