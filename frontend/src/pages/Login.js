import React, { useState } from 'react';
import "./Login.css";
import logo from "../assets/logo.svg";

import api from "../services/api";

function login({ history }) {
    // aqui pego estado, são variaveis
    const [username, setUsername] = useState('');
    // tem duas formas de declarar função ou por arrowfunction ou por uma setada

    async function handleSubmit(e) {
        // esse eevento bloqueia a ida para outrapagina
        e.preventDefault();
        // mudando de rota

        const response = await api.post("/devs", {
            username,
        })
        // exibe todos os dados da api
        // console.log(response.data)

        // vou usar só o id
        const { _id } = response.data;
        //  redirecionando para rota com id
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev" />
                <input placeholder="Digite seu usuario do github"
                    value={username}
                    onChange={e => { setUsername(e.target.value) }} />

                <button type="submit"> Enviar</button>
            </form>
        </div>
    );
}

export default login;