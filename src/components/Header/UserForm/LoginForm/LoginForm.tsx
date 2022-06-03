import React, {FC, useState} from 'react';
import {useActions} from "../../../../hooks/useActions";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {login, registration} = useActions()

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => login(email, password)}>
                Логин
            </button>
            <button onClick={() => registration(email, password)}>
                Регистрация
            </button>
        </div>
    );
};

export default LoginForm;