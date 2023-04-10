import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3009',
  validateStatus: (status) => status >= 200 && status < 400,
});

export default axiosClient;
