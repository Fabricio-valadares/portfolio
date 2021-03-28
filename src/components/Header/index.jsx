import Menu from "../Menu";
import { Container, Logo } from "./styled";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo onClick={() => history.push("/")}>F.</Logo>
      <Menu />
      <div style={{ marginRight: "8%" }}>
        <button>Contato</button>
      </div>
    </Container>
  );
};

export default Header;
