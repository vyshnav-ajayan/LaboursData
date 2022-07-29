import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://demo3365949.mockable.io',
  responseType: 'json',
});

export { apiClient };
