import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiList } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

function Listagem() {
    return (
        <div>      
        <li>
                <ul><FiList size={16}></FiList>Nome</ul>
                <ul><FiUser size={16}></FiUser>Paulo Andrade</ul>
                <ul><FiEdit size={16}></FiEdit>Editar</ul>
                <ul><FiTrash2 size={16}></FiTrash2>Excluir</ul>
            </li>
            <br></br>
            <li>
                <ul><FiList size={16}></FiList>Nome</ul>
                <ul><FiUser size={16}></FiUser>Larissa da Silva</ul>
                <ul><FiEdit size={16}></FiEdit>Editar</ul>
                <ul><FiTrash2 size={16}></FiTrash2>Excluir</ul>
            </li>
            <br></br>
            <li>
                <ul><FiList size={16}></FiList>Nome</ul>
                <ul><FiUser size={16}></FiUser>Jennyfer Araújo</ul>
                <ul><FiEdit size={16}></FiEdit>Editar</ul>
                <ul><FiTrash2 size={16}></FiTrash2>Excluir</ul>
            </li>
            <br></br>
            <li>
                <ul><FiList size={16}></FiList>Nome</ul>
                <ul><FiUser size={16}></FiUser>Maicosuel Raimundo</ul>
                <ul><FiEdit size={16}></FiEdit>Editar</ul>
                <ul><FiTrash2 size={16}></FiTrash2>Excluir</ul>
            </li>
            </div>
    );
}

export default Listagem;