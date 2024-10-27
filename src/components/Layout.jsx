import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Criando o tema claro
const theme = createTheme({
  palette: {
    mode: "light", // Define o modo claro
    primary: {
      main: "#1976d2", // Cor primária
    },
    background: {
      default: "#f5f5f5", // Cor de fundo principal da aplicação
      paper: "#ffffff", // Cor de fundo dos elementos de "papel"
    },
    text: {
      primary: "#000000", // Cor do texto principal
      secondary: "#5f6368", // Cor do texto secundário
    },
  },
});

export const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Começa fechado
  const location = useLocation(); // Para identificar a rota atual

  // Funções para lidar com o hover
  const handleMouseEnter = () => {
    setIsExpanded(true); // Abre a barra lateral
  };

  const handleMouseLeave = () => {
    setIsExpanded(false); // Fecha a barra lateral
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Barra lateral */}
        <Box
          onMouseEnter={handleMouseEnter} // Abre quando o mouse passa por cima
          onMouseLeave={handleMouseLeave} // Fecha quando o mouse sai
          sx={{
            width: isExpanded ? 240 : 80, // Largura da barra lateral dependendo do estado de expansão
            height: "100vh", // Altura da barra lateral ocupando toda a tela
            bgcolor: "#E8E7E7", // Cor de fundo da barra lateral
            display: "flex",
            flexDirection: "column",
            alignItems: isExpanded ? "flex-start" : "center", // Alinhamento dos itens
            overflowY: "auto",
            transition: "width 0.5s ease-in-out", // Transição suave para a mudança de largura
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Sombra leve na barra lateral
          }}
        >
          {/* Logo/Imagem no topo da barra lateral */}
          <Avatar
            src="../public/judoPerfil3.svg" // URL da imagem
            alt="Logo"
            sx={{
              width: 100, // Largura do avatar
              height: 100, // Altura do avatar
              marginBottom: 3, // Margem inferior
              alignSelf: "center", // Centraliza o avatar
              transition: "opacity 0.3s ease", // Transição suave da opacidade
              opacity: isExpanded ? 1 : 0, // Mostra ou esconde o avatar conforme a barra é expandida
            }}
          />

          {/* Lista de navegação com ícones */}
          <List>
            {[
              { text: "Home", rota: "home", icon: <HomeIcon /> },
              { text: "Dashboard", rota: "dashboard", icon: <DashboardIcon /> },
              { text: "Calendario", rota: "pagina2", icon: <EventIcon /> },
              { text: "Sair", rota: "login", icon: <LogoutIcon /> },
            ].map((item, index) => (
              <ListItem
                key={index}
                button
                component={Link}
                to={`/${item.rota.toLowerCase()}`} // Gera o link para a rota correspondente
                sx={{
                  justifyContent: isExpanded ? "flex-start" : "center", // Alinhamento horizontal
                  alignItems: "center", // Alinhamento vertical
                  color: "#545454", // Cor inicial do item de lista
                  transition: "all 0.3s ease-in-out", // Transição suave para todas as propriedades
                  "&:hover": {
                    backgroundColor: "transparent", // Não muda o fundo no hover
                    color: "#000000", // Muda a cor do texto no hover
                  },
                }}
              >
                {/* Ícone de navegação */}
                <ListItemIcon
                  sx={{
                    justifyContent: "center", // Centraliza o ícone
                    minWidth: "auto", // Remove o espaçamento padrão entre o ícone e o texto
                    color:
                      location.pathname === `/${item.rota.toLowerCase()}`
                        ? "#ffffff" // Ícone ativo fica branco
                        : "#545454", // Ícone inativo fica cinza
                    backgroundColor:
                      location.pathname === `/${item.rota.toLowerCase()}`
                        ? isExpanded
                          ? "#545454"
                          : "#545454" // Se expandido e ativo, fundo cinza
                        : isExpanded
                          ? "#ffffff"
                          : "none", // Ícones inativos não têm fundo quando fechado
                    padding: isExpanded ? "15px" : "8px", // Padding ao redor do ícone
                    borderRadius: isExpanded ? "27px" : "20px",
                    marginTop: isExpanded ? "15px" : "30px",
                    transition:
                      "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                    transform: isExpanded
                      ? "scale(1.2) translateY(20px)"
                      : "scale(1.5) translateY(-50px)",
                    "&:hover": {
                      color: "#000000", // Muda a cor no hover
                    },
                    boxShadow:
                      location.pathname === `/${item.rota.toLowerCase()}`
                        ? "0 4px 10px rgba(0, 0, 0, 0.5)" // Sombra ao redor do ícone ativo
                        : "none", // Sem sombra para ícones inativos
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {/* Texto ao lado do ícone (somente quando expandido) */}
                {isExpanded && (
                  <Typography
                    sx={{
                      marginTop: "60px", // Distância do ícone para o texto
                      marginLeft: 2, // Margem à esquerda do texto
                      opacity: isExpanded ? 1 : 0, // Opacidade muda conforme a expansão da barra
                      transition:
                        "opacity 0.3s ease-in-out, color 0.3s ease-in-out",
                      "&:hover": {
                        color: "#000", // Muda a cor do texto no hover
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
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, bgcolor: theme.palette.background.default }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
