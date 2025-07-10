import axios from 'axios';


const apiPrincipal = axios.create({
  baseURL: 'http://localhost:3000', 
});

const authApi = axios.create({
  baseURL: 'http://localhost:4000',
});


apiPrincipal.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export const login = (credentials) => authApi.post('/login', credentials);
export const register = (userData) => authApi.post('/register', userData);



export const getProducts = () => apiPrincipal.get('/products');
export const getByCategory = (cat) => apiPrincipal.get(`/products/category/${cat}`);
export const getReport = () => apiPrincipal.get('/reports');

