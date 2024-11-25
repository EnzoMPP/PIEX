import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/Dashboard";
import { Pagina2 } from "../pages/Pagina2";
import { Pagina3 } from "../pages/Pagina3";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota de Login */}
                <Route path="/login" element={<Login />} />

                {/* Rota raiz redireciona para Login */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Rotas protegidas com Layout */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="home" element={<Home />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="pagina2" element={<Pagina2 />} />
                        <Route path="pagina3" element={<Pagina3 />} />
                    </Route>
                </Route>

                {/* Redirecionar qualquer rota não encontrada para Home */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};