import axios from 'axios';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const apiRequests = axios.create({
    baseURL: 'http://localhost:5001/api/',
    timeout: 60 * 1000,
    headers,
});

export default apiRequests;