import axios from 'axios';

// Usa o proxy definido em frontend/package.json:
//   "proxy": "http://localhost:3000"
const API = axios.create({ baseURL: '/' });

export const getUsers = () => API.get('/users');
export const createUser = data => API.post('/users', data);
export const getProducts = () => API.get('/products');
export const getByCategory = cat => API.get(`/products/category/${cat}`);
export const getReport = () => API.get('/reports');
