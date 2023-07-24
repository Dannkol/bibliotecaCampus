import express from "express";

// controllers



// middleware

const router = express.Router();


import { getAllautores } from "../controllers/autoresController.js";
import { getAllcategorias } from "../controllers/categoriasController.js";

router.get('/autores', getAllautores);

router.get('/categorias', getAllcategorias);



export default router;