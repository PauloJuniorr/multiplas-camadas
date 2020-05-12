import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import api from '../services/api';

function Cadastro() {

    const [nome, setNome] = useState('');
    const [ano_lancamento, setAnoLancamento] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            ano_lancamento
        };

        try {
            const response = await api.post('filme', data);
            const id = response.data.id;
            alert("Seu id de acesso:" + id);
            // history.push('/');
        } catch (error) {
            alert("Erro no Cadastro")
        }
    }

    return (
    <div className="cadastrar-container"> 
        <form className="form" onSubmit={handleCadastro}>     
        <h1>Meu Cadastro</h1>
        <input type="name" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o Nome do Filme"></input>

        <input type="text" value={ano_lancamento} onChange={e => setAnoLancamento(e.target.value)} placeholder="Digite o Ano de Lançamento"></input>
       
        <button type="submit">Cadastrar</button>       
            <p>Já tenho conta</p>
        </form>
    </div>
    );
}

export default Cadastro;