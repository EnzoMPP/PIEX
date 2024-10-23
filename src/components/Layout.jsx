import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Box, List, ListItem, ListItemIcon, IconButton, Avatar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Criando o tema claro
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#5f6368',
        },
    },
});

export const Layout = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', height: '100vh' }}>

                <Box
                    sx={{
                        width: isExpanded ? 240 : 80,
                        height: '100vh',
                        bgcolor: '#E8E7E7',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isExpanded ? 'flex-start' : 'center',
                        paddingTop: 2,
                        overflowY: 'auto', // 
                        transition: 'width 0.5s ease-in-out',
                        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                        scrollbarWidth: 'thin',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#c1c1c1',
                            borderRadius: '8px',
                        },
                    }}
                >
                    {/* Botão de abrir e fechar */}
                    <IconButton onClick={toggleSidebar} sx={{ alignSelf: isExpanded ? 'flex-end' : 'center' }}>
                        {isExpanded ? <ChevronLeftIcon sx={{ color: '#545454' }} /> : <MenuIcon sx={{ color: '#545454' }} />}
                    </IconButton>

                    {/* Logo/Imagem no topo */}
                    <Avatar
                        src="../public/judoPerfil3.svg" // Deixe a URL vazia para adicionar a imagem depois
                        alt="Logo"
                        sx={{
                            width: 100,
                            height: 100,
                            marginBottom: 3,
                            alignSelf: 'center',
                            transition: 'opacity 0.3s ease',
                            opacity: isExpanded ? 1 : 0,
                        }}
                    />

                    {/* Ícones  Navegação */}
                    <List>
                        {[
                            { text: 'Home', rota:'home', icon: <HomeIcon /> },
                            { text: 'Dashboard',rota:'pagina1', icon: <DashboardIcon /> },
                            { text: 'Calendario',rota:'pagina2', icon: <EventIcon /> },
                            { text: 'sair',rota:'login', icon: <LogoutIcon /> },
                        ].map((item, index) => (
                            <ListItem
                                key={index}
                                button
                                component={Link}
                                to={`/${item.rota.toLowerCase()}`}
                                sx={{
                                    justifyContent: isExpanded ? 'flex-start' : 'center',
                                    alignItems: 'center', // Centraliza o ícone e o texto verticalmente
                                    color: '#545454',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        // Remover fundo quadrado e aplicar cor no texto
                                        backgroundColor: 'transparent',
                                        color: '#000', // O texto fica mais escuro quando o mouse está sobre ele
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: 'center',
                                        minWidth: 'auto',
                                        color: '#545454',
                                        padding: '10px',
                                        transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out', // Suavizar a cor e a escala no hover
                                        transform: isExpanded
                                            ? 'scale(1.2) translateY(20px)'  // Ícones ficam mais abaixo quando expandido
                                            : 'scale(1.5) translateY(-50px)', // Ícones sobem quando recolhido
                                        '&:hover': {
                                            color: '#1976d2', // Cor de hover padrão do MUI
                                        },
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                {isExpanded && (
                                    <Typography
                                        sx={{
                                            marginTop: '50px',
                                            marginLeft: 2, // Mantém o espaçamento entre o ícone e o texto
                                            opacity: isExpanded ? 1 : 0,
                                            transition: 'opacity 0.3s ease-in-out, color 0.3s ease-in-out', // Transição suave no hover
                                            '&:hover': {
                                                color: '#000', // Deixa o texto mais escuro no hover
                                            },
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                )}
                            </ListItem>
                        ))}
                    </List>

                </Box>

                {/* Conteúdo principal */}
                <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: theme.palette.background.default }}>
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
};
