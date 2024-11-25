import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

export const Login = () => {
    const [senhaDigitada, setSenhaDigitada] = useState("");
    const [userDigitado, setUserDigitado] = useState("");
    const navigate = useNavigate();

    const [user, senha] = ["judo", "judo"]; // ###EMAIL E SENHA PARA DESENVOLVIMENTO

    const validaLogin = () => {
        if (userDigitado === user && senhaDigitada === senha) {
            sessionStorage.setItem("loggedIn", true);
            navigate("/home");
        } else {
            alert("Usuário ou senha incorretos!");
        }
    };

    return (
        <div className="container">
            <h2 className="title">Entrar</h2>
            <img src="./src/assets/lugo.jpg" alt="Logo" className="logo" />
            <input
                type="email"
                placeholder="E-mail"
                onChange={(event) => setUserDigitado(event.target.value)}
                className="input"
            />
            <input
                type="password"
                placeholder="Senha"
                onChange={(event) => setSenhaDigitada(event.target.value)}
                className="input"
            />
            <a href="#" className="senha">Redefinir Senha</a>
            <button
                className="button"
                onClick={validaLogin}
            >
                Login
            </button>
        </div>
    )
}