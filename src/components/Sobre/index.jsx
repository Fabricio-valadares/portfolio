import {
  Container,
  DivText,
  DivImage,
  Image,
  Title,
  Text,
  Button,
  FaGithubStyled,
  AStyled,
  DivContent,
  DivButton,
} from "./styled";
import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <Container>
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        transition={{ duration: 1 }}
      >
        <DivText>
          <DivContent>
            <Title>Desenvolvedor Front-End</Title>
            <Text>
              Fico muito feliz ao dizer que sou um programador Front-End, porque
              me tornar um programador era uns dos meus sonhos, que hoje e
              realidade!
            </Text>
            <DivButton>
              <Button>
                <FaGithubStyled />
                <AStyled
                  href="https://github.com/Fabricio-valadares"
                  target="_blank"
                >
                  Conhecer Github
                </AStyled>
              </Button>
            </DivButton>
          </DivContent>
        </DivText>
      </motion.div>
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: "0%" }}
        transition={{ duration: 1 }}
      >
        <DivImage>
          <Image />
        </DivImage>
      </motion.div>
    </Container>
  );
};

export default Sobre;
