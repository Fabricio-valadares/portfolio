import { Container, Dow, Animation, Text } from "./styled";

const Aviso = () => {
  return (
    <Container>
      <Text style={{ fontWeight: 300, fontVariant: "petite-caps" }}>
        Mas antes de mostar alguns projetos que já desenvolvi, quero contar um
        pouco de como chegeui até aqui !
      </Text>
      <Animation>
        <Dow />
      </Animation>
    </Container>
  );
};

export default Aviso;