import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listContacts(orderBy) {
    return this.httpClient.get(`/contactss?orderBy=${orderBy}`);
  }
}

export default new ContactsService();