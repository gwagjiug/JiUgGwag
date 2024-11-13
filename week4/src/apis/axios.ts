import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://211.188.53.75:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
