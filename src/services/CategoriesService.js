import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://192.168.0.5:3333');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
