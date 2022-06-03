import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {IUser} from "../../../models/IUser/IUser";
import UserService from "../../../services/UserService";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const UserForm: FC = () => {
    const {user, isAuth, isLoading} = useTypedSelector(state => state.userForm)
    const {checkAuth, logout} = useActions()
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (!isAuth) {
        return (
            <div>
                <LoginForm/>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{isAuth ? `Пользователь авторизован ${user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <button onClick={() => logout()}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
};

export default UserForm;

