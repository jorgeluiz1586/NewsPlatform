import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json, text/html'
    }
});

export default api;