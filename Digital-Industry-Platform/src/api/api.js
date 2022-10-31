import req from '@/api//axios';
import { reactive, shallowRef } from 'vue';
import axios from 'axios';
import { useUserStore } from './src/stores/user';

export const userLogin = (user) => {
    const userStore = useUserStore();
    user.captchaId = userStore.loginCaptchaUuid;
    const login = axios.create({baseURL: import.meta.env.VITE_BACKEND_HOST});
    return login.post('/user/login', user).then((r) => {
        if(r.status === 200){
            localStorage.setItem('token', r.data.token);
        }
        return r.status === 200;
    });
}

export const testFetchData = () => {
    return req.post('/user/information').then((r) => {
        console.log(r)
        return r.data;
    });
}