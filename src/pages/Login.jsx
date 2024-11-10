import React from "react";
import "../pages/Login.css";

export const Login = () => {


    return (
        <div className="container">
            <h2 className="title">Entrar</h2>
            <img src="./src/assets/lugo.jpg" alt="Logo" className="logo" />
            <input
                type="email"
                placeholder="E-mail"
                className="input"
            />
            <input
                type="password"
                placeholder="Senha"
                className="input"
            />
            <a href="#" className="senha">Redefinir Senha</a>
            <button className="button">
                Login
            </button>
        </div>
    )
}