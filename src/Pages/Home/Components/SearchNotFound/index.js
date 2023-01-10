import PropTypes from 'prop-types';
import { Container } from './styles';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';

export default function SearchNotFound({ value }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Nenhum contato encontrado" />
      <p>
        Nenhum contato foi encontrato para
        {' '}
        <strong>
          “
          {value}
          ”
        </strong>
        .
      </p>
    </Container>
  );
}

SearchNotFound.propTypes = {
  value: PropTypes.string.isRequired,
};
