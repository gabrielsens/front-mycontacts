import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  listContacts(orderBy) {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: {
        Authorization: 'meuToken',
      },
    });
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContact(contact) {
    return this.httpClient.post('/contacts', {
      body: contact,
    });
  }

  updateContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, {
      body: contact,
    });
  }
}

export default new ContactsService();
