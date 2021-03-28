import { NavStyled, Itens } from "./styled";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  return (
    <NavStyled>
      <Itens onClick={() => history.push("/")}>
        <a
          style={{ color: "#fff", textDecoration: "none", display: "flex" }}
          href="#history"
        >
          Sobre <span style={{ marginLeft: 5 }}>Mim</span>
        </a>
      </Itens>
      <Itens onClick={() => history.push("/")}>
        <a style={{ color: "#fff", textDecoration: "none" }} href="#projects">
          Projetos
        </a>
      </Itens>
      <Itens onClick={() => history.push("/")}>
        <a style={{ color: "#fff", textDecoration: "none" }} href="#artigos">
          Artigos
        </a>
      </Itens>
      <Itens onClick={() => history.push("/")}>
        <a style={{ color: "#fff", textDecoration: "none" }} href="#hardSkills">
          HardSkills
        </a>
      </Itens>
    </NavStyled>
  );
};

export default Menu;
