import React from 'react';
import "./Login.css";
import logo from "../assets/logo.svg";

function login (){
        return (
            <div className="login-container">
                <form>
                    <img src={logo} alt="tindev" />
                    <input placeholder="Digite seu usuario do github" />
                    <button type="submit"> Enviar</button>
                </form>
            </div>
        );
    }

export default login;