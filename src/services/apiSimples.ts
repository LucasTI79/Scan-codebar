import axios from 'axios';

const apiSimples = axios.create({
  baseURL: 'https://api.simplesdental.com',
});

export default apiSimples;