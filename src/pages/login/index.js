import './login.css';
import icon from './../../images/icon.png';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {        
        try {
            const response = await api.post("auth/login", {
                email: user,
                password: password
            })
            if (response.status == 200){
                api.defaults.headers.authorization = `Bearer ${response.data.token}`;
                window.localStorage.setItem('user_token', response.data.token);
                navigate("/home");
            }
        }
        catch (error) {
            if (error.response.status == 403)
                toast.error("E-mail e senha inválido!")
            else
                toast.error("Algo deu errado, por favor contate o suporte!")
        }        
    }
    return (
        <div className="container-login">
            <div className='body-login'>
                <img src={icon} />
                <label>Usuário:</label>
                <input className='input' onChange={(e) => { setUser(e.target.value) }} />
                <label>Senha:</label>
                <input className='input' type='password' onChange={(e) => { setPassword(e.target.value) }} />
                <button className='button-login' onClick={handleLogin}>Entrar</button>
            </div>
        </div>
    )
}