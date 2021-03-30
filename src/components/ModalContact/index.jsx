import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: "10px",
    paddingBottom: "15px",
    borderBottom: "1px solid #333",
    fontSize: "1.7rem",
    fontWeight: 300,
  },
  spaceIcons: { marginRight: "20px" },
  divItens: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "20px 0",
    "& > a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 300,
    },
    "&:hover": {
      color: "#40c5dc",
    },
    "& > a:hover": {
      color: "#40c5dc",
    },
  },
  paper: {
    background: "#23222f",
    border: "none",
    outline: "none",
    boxShadow: theme.shadows[5],
    color: "#fff",

    padding: "16px 1rem 24px",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({ button }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        type="button"
        onClick={handleOpen}
      >
        {button}
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title" className={classes.title}>
              Contato
            </h2>
            <div className={classes.divItens}>
              <RiLinkedinLine className={classes.spaceIcons} size={27} />
              <a
                href="https://www.linkedin.com/in/fabricio-valadares"
                target="_blank"
              >
                @Fabricio-Valadares
              </a>
            </div>
            <div className={classes.divItens}>
              <AiOutlineWhatsApp className={classes.spaceIcons} size={27} />
              <a
                href="https://api.whatsapp.com/send?phone=5562984758804"
                target="_blank"
              >
                (62) 9 8475-8804
              </a>
            </div>
            <div className={classes.divItens}>
              <FiMail className={classes.spaceIcons} size={27} />
              <a href="#">fabriciovaladares0@gmail.com</a>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
