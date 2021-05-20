import { Container, Dow, Animation, Text } from "./styled";

const Notice = () => {
  return (
    <Container>
      <Text style={{ fontWeight: 300, fontVariant: "petite-caps" }}>
        Mas antes de mostrar alguns projetos que já desenvolvi, quero contar um
        pouco de como cheguei até aqui !
      </Text>
      <Animation>
        <Dow />
      </Animation>
    </Container>
  );
};

export default Notice;
