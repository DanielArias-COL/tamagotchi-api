import express from "express";

import { getPet } from "../controllers/petController.js";


const router = express.Router();


router.get("/", getPet);


export default router;