import express from "express";

// controllers



// middleware

const router = express.Router();


import { getAllautores } from "../controllers/autoresController.js";
import { getAllcategorias } from "../controllers/categoriasController.js";
import { getAlleditor } from "../controllers/editoresController.js";
import { getAlllibrosEstadoDes } from "../controllers/librosControllers.js";

router.get('/autores', getAllautores);

router.get('/categorias', getAllcategorias);

router.get('/editorial', getAlleditor);

router.get('/libros', getAlllibrosEstadoDes);

export default router;