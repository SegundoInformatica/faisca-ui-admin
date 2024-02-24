import axios from 'axios';

const api = axios.create({    
    //baseURL: 'http://44.207.2.85:8080/'    
    baseURL: 'http://localhost:8080/'    
});
api.interceptors.request.use(
    async (config) => {

        var token = localStorage.getItem("user_token");

        api.defaults.headers.authorization = `Bearer ${token}`;
        config.headers = {
            Authorization: `Bearer ${token}`,
        };

        if (config.url.includes('auth'))
            return config;

        if (!token) {
            window.location.href = '/login';
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
export default api;