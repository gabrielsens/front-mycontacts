import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, ListHeader, Card, InputSearchContainer, ErrorContainer,
} from './styles';

// import APIError from '../../errors/APIError';
import sad from '../../assets/images/sad.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Button from '../../components/Button';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [searchTerm, contacts]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      if (contactsList) {
        setHasError(false);
        setContacts(contactsList);
      }
    } catch (error) {
      // if (error instanceof APIError) {}
      // eslint-disable-next-line no-console
      console.log(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input type="text" value={searchTerm} placeholder="Pesquise pelo nome..." onChange={handleChangeSearchTerm} />
      </InputSearchContainer>
      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {filteredContacts.length}
            {' '}
            {filteredContacts.length === 1
              ? 'Contato'
              : 'Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      { hasError && (
        <ErrorContainer>
          <img src={sad} alt="Ocorreu um erro" />

          <div className="details">

            <strong>Ocorreu um erro ao obter seus contatos!</strong>

            <Button type="button" onClick={handleTryAgain}>Tentar Novamente</Button>

          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" />
            </button>
          </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category_name && <small>{contact.category_name}</small>}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>
                <button type="button">
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
