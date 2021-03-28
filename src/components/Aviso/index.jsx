import { Container, Dow, Animation } from "./styled";

const Aviso = () => {
  return (
    <Container>
      <h2 style={{ fontWeight: 300, fontVariant: "petite-caps" }}>
        <span
          style={{
            fontSize: 50,
            fontFamily: "IM Fell Great Primer SC",
          }}
        >
          ''
        </span>
        Mas antes de mostar alguns projetos que já desenvolvi, quero contar um
        pouco de como chegeui até aqui !
        <span
          style={{
            fontSize: 50,
            fontFamily: "IM Fell Great Primer SC",
          }}
        >
          "
        </span>
      </h2>
      <Animation>
        <Dow />
      </Animation>
    </Container>
  );
};

export default Aviso;
