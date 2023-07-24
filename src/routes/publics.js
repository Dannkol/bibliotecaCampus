import express from "express";

// controllers



// middleware

const router = express.Router();


import { getAllautores } from "../controllers/autoresController.js";

router.get('/', getAllautores)


export default router;