import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Pagina1 } from "../pages/pagina1";
import { Pagina2 } from "../pages/pagina2";
import { Pagina3 } from "../pages/pagina3";
import { Home } from "../pages/home";
import { Layout } from "../components/Layout";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota de Login */}
                <Route path="/login" element={<Login />} />

                {/* Layout aplicado a todas as outras páginas */}
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="pagina1" element={<Pagina1 />} />
                    <Route path="pagina2" element={<Pagina2 />} />
                    <Route path="pagina3" element={<Pagina3 />} />
                    
                    {/* Redireciona a rota raiz para Home após login */}
                    <Route path="/" element={<Navigate to="/home" />} />
                </Route>

                {/* Redirecionar qualquer rota não encontrada para Home */}
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
};
