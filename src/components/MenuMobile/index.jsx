import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Container, ButtonStyled } from "./styled";
import { FiSmile, FiFolder, FiBookOpen, FiCheckSquare } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";

import { useHistory } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#40c5dc",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#fff",
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <ButtonStyled
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <CgMenuRightAlt size={27} />
      </ButtonStyled>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a
          style={{
            listStyle: "none",
            textDecoration: "none",
            color: "#0000008a",
          }}
          onClick={handleClose}
          href="#history"
        >
          <StyledMenuItem onClick={() => history.push("/")}>
            <ListItemIcon>
              <FiSmile size={23} />
            </ListItemIcon>
            <ListItemText primary="Sobre mim" />
          </StyledMenuItem>
        </a>
        <a
          style={{
            listStyle: "none",
            textDecoration: "none",
            color: "#0000008a",
          }}
          onClick={handleClose}
          href="#projects"
        >
          <StyledMenuItem onClick={() => history.push("/")}>
            <ListItemIcon>
              <FiFolder size={23} />
            </ListItemIcon>
            <ListItemText primary="Projetos" />
          </StyledMenuItem>
        </a>
        <a
          style={{
            listStyle: "none",
            textDecoration: "none",
            color: "#0000008a",
          }}
          onClick={handleClose}
          href="#artigos"
        >
          <StyledMenuItem onClick={() => history.push("/")}>
            <ListItemIcon>
              <FiBookOpen size={23} />
            </ListItemIcon>
            <ListItemText primary="Artigos" />
          </StyledMenuItem>
        </a>
        <a
          style={{
            listStyle: "none",
            textDecoration: "none",
            color: "#0000008a",
          }}
          onClick={handleClose}
          href="#hardSkills"
        >
          <StyledMenuItem onClick={() => history.push("/")}>
            <ListItemIcon>
              <FiCheckSquare size={23} />
            </ListItemIcon>
            <ListItemText primary="HardSkills" />
          </StyledMenuItem>
        </a>
      </StyledMenu>
    </Container>
  );
}
