import axios from 'axios';

interface ApiServiceI {
  getProducts(): Promise<{}>;
}

class ApiService implements ApiServiceI {
  getProducts() {
    return axios.get('/data/products.json');
  }
}

export const apiService = new ApiService();