import axios from 'axios';
import {AuthResponse} from "../../models/IUser/response/AuthResponse";


export const API_URL_USER_FORM = `http://localhost:8000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL_USER_FORM
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL_USER_FORM}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
            return null;
        }
    }
    if (error.response.status == 400 && error.config.data === undefined && error.config.headers.Authorization !== undefined) {
        console.log('КОРИСТУВАЧ НЕ АКТИВОВАНИЙ, АЛЬО ГАРАЖ')
        return null;
    }
    throw error;
})

export default $api;
