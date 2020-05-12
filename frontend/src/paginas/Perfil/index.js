import React from 'react';
import './style.css';
import { useHistory, Link } from 'react-router-dom';
import sanji from '../../imagens/sanji.jpg';

function Perfil() {
     const history = useHistory();

    function clearLogout() {       
        localStorage.clear();
        history.push('/');
    }

    return (
    <div className="perfil-container"> 
        <form className="form">   
        <h1>Meu Perfil</h1>
        <h1>Olá {localStorage.getItem('email')}</h1>
        <img src={sanji}></img>
        <div id="titulo"></div>
        <input id="nome" type="text" placeholder="Digite seu Nome Completo"></input>
        <input type="email" placeholder="Digite seu E-mail"></input>
        <input type="text" placeholder="Digite seu Telefone"></input>
        <input type="text" placeholder="Digite sua Cidade"></input>
        <input type="text" placeholder="Digite seu Estado"></input>
        <input type="password" placeholder="Digite sua Senha"></input>
        <button type="submit">Salvar</button> 
        <button onClick={clearLogout} type="submit">Logout</button> 
        </form>
    </div>
    );
}

export default Perfil;