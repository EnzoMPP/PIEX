import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const isAuthenticated = !!sessionStorage.getItem("loggedIn"); // Verifica se o usuário está autenticado

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};