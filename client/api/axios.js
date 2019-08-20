import axios from 'axios'
import router from '../src/route'
import { Toast } from 'mand-mobile'

axios.interceptors.request.use(function(config) {
        //从localStorage里取出token
        const token = localStorage.getItem('token');
        //把token塞入Authorization里
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    }, function(error) {
    // Do something with request error
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(function(response) {
    //获取更新的token
    const { authorization } = response.headers;
    //如果token存在则存在localStorage
    authorization && localStorage.setItem('tokenName', authorization);
    return response;
   }, function(error) {
        if (error.response) {
            const { status } = error.response;
            //如果401或405则到登录页
            if (status == 401 || status == 405) {
                localStorage.removeItem('token');
                Toast.hide();
                Toast.failed('token失效，请重新登录');
                router.push({name:'login'});
            }
        }
        return Promise.reject(error);
    }
);

export default axios;
// Vue.prototype.$axios = axios