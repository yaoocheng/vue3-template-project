import Axios from 'axios';
import {
    showMessage, getUserInfo,
} from 'util/tools';

const axios = Axios.create({
    baseURL: '',
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    async (request: any) => {
        if (getUserInfo()) {
            request.headers.Authorization = `${getUserInfo().token}`;
            request.headers.Uid = `${getUserInfo().user_id}`;
        }
        return request;
    },
    (error) => Promise.reject(error),
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const code = error.response.status;
        const msg = error.response?.data?.msg_zh || error.response?.data?.msg_en || error.response.statusText;
        showMessage(`${code}: ${msg}`, 'error');
        return Promise.reject(error);
    },
);

export default axios;
