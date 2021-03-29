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

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo onClick={() => history.push("/")}>F.</Logo>
      <Menu />
      <DivButton>
        <Button>
          <FiMessageCircle size={20} />
          <span style={{ marginLeft: 10, fontWeight: "bold", color: "#333" }}>
            Contato
          </span>
        </Button>
      </DivButton>
      <DivButtonTwo>
        <ButtonTwo>
          <FiMessageCircle size={20} />
        </ButtonTwo>
      </DivButtonTwo>
      <CustomizedMenus />
    </Container>
  );
};

export default Header;
