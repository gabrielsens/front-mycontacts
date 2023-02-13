import {
  Container,
} from './styles';

import Loader from '../../components/Loader';

import useHome from './useHome';

import InputSearch from './Components/InputSearch';
import Header from './Components/Header';
import ErrorStatus from './Components/ErrorStatus';
import EmptyList from './Components/EmptyList';
import SearchNotFound from './Components/SearchNotFound';
import ContactsList from './Components/ContactsList';
import Modal from '../../components/Modal';

export default function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    hasError,
    contacts,
    handleChangeSearchTerm,
    searchTerm,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      { hasError && <ErrorStatus onTryAgain={handleTryAgain} /> }
      { isListEmpty && <EmptyList /> }
      { isSearchEmpty && <SearchNotFound value={searchTerm} /> }

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remover o contato “${contactBeingDeleted?.name}”`}
            confirmLabel="Deletar"
            isLoading={isLoadingDelete}
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Essa ação não poderá ser desfeita</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
