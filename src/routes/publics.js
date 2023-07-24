import express from "express";

// controllers



// middleware

const router = express.Router();


import { getAllautores } from "../controllers/autoresController.js";
import { getAllcategorias } from "../controllers/categoriasController.js";
import { getAlleditor } from "../controllers/editoresController.js";
import { getAlllibrosEstadoDes , getAlllibrosAutorEdit , getAllDisponible , getAllPrestado } from "../controllers/librosControllers.js";

import { getAll } from "../controllers/authController.js"

router.get('/autores', getAllautores);

router.get('/categorias', getAllcategorias);

router.get('/editorial', getAlleditor);

router.get('/libros', getAlllibrosEstadoDes);

router.get('/libros/disponibles', getAllDisponible);

router.get('/libros/prestados', getAllPrestado);

router.get('/libros/autor/editoriela', getAlllibrosAutorEdit);

router.get('/usuarios', getAll);


export default router;