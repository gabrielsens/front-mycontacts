import { Container, Overlay, Footer } from './styles';
import Button from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do Modal</h1>
        <p>
          Corpo do Modal
        </p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
