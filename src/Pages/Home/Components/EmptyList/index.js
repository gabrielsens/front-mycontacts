import emptyBox from '../../../../assets/images/empty-box.svg';
import { Container } from './styles';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Lista de Contatos Vazia" />
      <p>
        Você ainda não possui nenhum contato cadastrado!
        Clique no Botão
        {' '}
        <strong>“Novo Contato”</strong>
        {' '}
        à cima
        para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
