import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseUrl}${path}`);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Erro na API');
  }
}

export default HttpClient;
