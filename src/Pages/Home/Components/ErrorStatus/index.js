import PropTypes from 'prop-types';
import Button from '../../../../components/Button';
import { Container } from './styles';
import sad from '../../../../assets/images/sad.svg';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="Ocorreu um erro" />
      <div className="details">
        <strong>Ocorreu um erro ao obter seus contatos!</strong>
        <Button type="button" onClick={onTryAgain}>
          Tentar Novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
