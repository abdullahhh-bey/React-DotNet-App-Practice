import axios from 'axios';

const apiCall = axios.create({
    baseURL: "http://localhost:5165/api", // All requests will start from this URL
    timeout: 10000, // 10 seconds timeout
    headers: {
        "Content-Type": "application/json",
    }
});

export default apiCall;