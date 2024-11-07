import React, { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Pagina2 = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cpf: "",
        dataNascimento: "",
        nomeCompleto: "",
        nomeMae: "",
        nomePai: "",
        telefone: "",
        email: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        complemento: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        // Lógica para salvar os dados
        console.log("Dados salvos:", formData);
    };

    const handleCancel = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <Box
            component="form"
            sx={{
                maxWidth: 800,
                margin: "0 auto",
                padding: 2,
                backgroundColor: "#FFF8F0", // cor de fundo mais clara
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="CPF"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Data de Nascimento"
                        name="dataNascimento"
                        type="date"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Nome Completo"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Nome da Mãe"
                        name="nomeMae"
                        value={formData.nomeMae}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Nome do Pai"
                        name="nomePai"
                        value={formData.nomePai}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="CEP"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Rua"
                        name="rua"
                        value={formData.rua}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Número"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Bairro"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Complemento"
                        name="complemento"
                        value={formData.complemento}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 2 }}>
                    Salvar
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCancel}>
                    Cancelar/Voltar
                </Button>
            </Box>
        </Box>
    );
};
