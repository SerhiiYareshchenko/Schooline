import $api from "../api/userFormInterceptor";
import {AxiosResponse} from 'axios';
import {IUser} from "../models/IUser/IUser";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}