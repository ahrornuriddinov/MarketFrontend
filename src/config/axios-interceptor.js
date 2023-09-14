import axios from "axios";


const onrequesSucces = config =>{
    const token = localStorage.getItem("market-token")
    const url_server = "http://localhost:8085/"
    if (token){
       if (!config.headers){
           config.headers = {}
       }
       config.headers.Authorization=`Bearer ${token}`;
    }
    config.url = `${url_server}${config.url}`;
    return config;
};
const setAxiosInter = onUnauthenticated =>{
    const onResponseError = err => {
        console.log(JSON.stringify(err))
        const num =err.status || err.response.status
        if (num === 401 || num === 403){
            onUnauthenticated();
        }
        return Promise.reject(err);
    };
    if (axios.interceptors){
        axios.interceptors.request.use(onrequesSucces);
        axios.interceptors.response.use(res=>res,onResponseError);
    }
};
export {onrequesSucces,setAxiosInter}

