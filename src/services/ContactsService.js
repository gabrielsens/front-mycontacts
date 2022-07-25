import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.5:3333');
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

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
