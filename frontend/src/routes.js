import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Teste from './paginas/Teste';
import Listagem from './paginas/Listagem';

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true}  component={Login}></Route>
            <Route path="/cadastrar" exact={true} component={Cadastro}></Route>
            <Route path="/perfil" exact={true} component={Perfil}></Route>
            <Route path="/teste" exact={true} component={Teste}></Route>
            <Route path="/listagem" exact={true} component={Listagem}></Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;