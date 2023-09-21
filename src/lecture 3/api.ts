import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ron-swanson-quotes.herokuapp.com/v2',
});

export default api;
