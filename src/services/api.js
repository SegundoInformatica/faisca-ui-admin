import axios from 'axios';

const api = axios.create({    
    baseURL: 'http://api-faisca.online/'    
    //baseURL: 'http://localhost:8080/'    
});
api.interceptors.request.use(
    async (config) => {
        config.headers = {};
        api.defaults.headers.authorization = null;

        if (config.url.includes('auth'))
            return config;

        var token = localStorage.getItem("user_token");

        console.log(token)

        if(token){
            api.defaults.headers.authorization = `Bearer ${token}`;
            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        }                

        if (!token) {
            window.location.href = '/login';
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);


api.interceptors.response.use(async (response) => {

    return response
}, async (error) => {
    if (error.response.status == 401)
        window.location.href = '/login';

    if (error.response.status == 403)
        window.location.href = '/login';
})


export default api;