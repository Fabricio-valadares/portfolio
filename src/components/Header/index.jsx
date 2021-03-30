import Menu from "../Menu";
import {
  Container,
  Logo,
  Button,
  DivButton,
  DivButtonTwo,
  ButtonTwo,
} from "./styled";
import { useHistory } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";
import CustomizedMenus from "../MenuMobile";
import SpringModal from "../ModalContact";
import { motion } from "framer-motion";

const Header = () => {
  const history = useHistory();

  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Logo onClick={() => history.push("/")}>F.</Logo>
        <Menu />

        <DivButton>
          <SpringModal
            button={
              <Button>
                <FiMessageCircle size={20} />
                <span
                  style={{ marginLeft: 10, fontWeight: "bold", color: "#333" }}
                >
                  Contato
                </span>
              </Button>
            }
          />
        </DivButton>
        <DivButtonTwo>
          <SpringModal
            button={
              <ButtonTwo>
                <FiMessageCircle size={20} />
              </ButtonTwo>
            }
          />
        </DivButtonTwo>
        <CustomizedMenus />
      </Container>
    </motion.div>
  );
};

export default Header;
