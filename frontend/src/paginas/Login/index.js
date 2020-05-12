import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import './style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();

        console.log(email);
        console.log(password);
        
        localStorage.setItem('email', email);

        history.push('/perfil');
    }

    return (
        <div className="login-container"> 
        <form className="form" onSubmit={handleLogin}>
            <h1 id="titulo">Faça seu login</h1>
            <input type="email" placeholder="Digite seu e-mail" value={email} 
            onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Digite sua senha" value={password}
            onChange={e => setPassword(e.target.value)}></input>
            <div></div>
            <button className="button" type="submit">Entrar</button>            
            <button type="submit">Cadastrar</button>      
            <Link to="/esqueciSenha"><p>Esqueci minha senha</p></Link>   
            <Link to="/cadastrar"><p><FiLogIn size={16}></FiLogIn> Não tenho cadastro</p></Link>
            </form>
        </div>
    );
}

export default Login;