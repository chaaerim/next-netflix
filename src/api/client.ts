import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default client;
