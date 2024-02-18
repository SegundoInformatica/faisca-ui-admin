import axios from 'axios';

const api = axios.create({    
    baseURL: 'http://44.207.2.85:8080/'    
    //baseURL: 'http://localhost:8080/'    
});

export default api;