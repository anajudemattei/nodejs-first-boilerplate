import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
    res.status(200).json({
        message: usuarios.length == 0 ? "Não há usuários cadastrados" : `Total de usuários: ${usuarios.length}`,
        usuarios, 
    });
});

export default usuariosRoutes;
