import { Container, Dow, Animation, Text } from "./styled";
import { motion } from "framer-motion";

const Aviso = () => {
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Text style={{ fontWeight: 300, fontVariant: "petite-caps" }}>
          Mas antes de mostrar alguns projetos que já desenvolvi, quero contar
          um pouco de como cheguei até aqui !
        </Text>
        <Animation>
          <Dow />
        </Animation>
      </Container>
    </motion.div>
  );
};

export default Aviso;
