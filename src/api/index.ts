import Axios from 'axios';
import type {
    AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios';
import {
    showMessage, getUserInfo,
} from 'utils/tools';

const serivce:AxiosInstance = Axios.create({
    baseURL: '',
});

// 前置拦截器（发起请求之前的拦截）
serivce.interceptors.request.use(
    async (request: AxiosRequestConfig | any) => {
        if (getUserInfo()) {
            request.headers.Authorization = `${getUserInfo().token}`;
            request.headers.Uid = `${getUserInfo().user_id}`;
        }
        return request;
    },
    (error:AxiosError) => Promise.reject(error),
);

// 后置拦截器（获取到响应时的拦截）
serivce.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error:AxiosError) => {
        const code = error.response?.status;
        const msg = error.response?.data?.msg_zh || error.response?.data?.msg_en || error.response?.statusText;
        showMessage(`${code}: ${msg}`, 'error');
        return Promise.reject(error);
    },
);

// get request
export const get = async <T>(url: string, params: Object): Promise<T> => serivce.get(url, {
    params,
});

// post request
export const post = async <T>(url: string, data: Object): Promise<T> => serivce.post(url, data);
