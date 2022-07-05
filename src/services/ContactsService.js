import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listContacts(orderBy) {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: {
        Authorization: 'meuToken',
      },
    });
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', {
      body: contact,
    });
  }
}

export default new ContactsService();
