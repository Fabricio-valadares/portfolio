import { Container } from "./styled";
import { getYear } from "date-fns";

const Footer = () => {
  return (
    <Container>
      <p style={{ fontWeight: 300 }}>
        © Desenvolvido por Fabricio Valadares - {getYear(new Date())}
      </p>
    </Container>
  );
};

export default Footer;
