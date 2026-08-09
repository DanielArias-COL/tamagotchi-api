import express from "express";

import petRoutes from "./routes/petRoutes.js";


const app = express();


app.use(express.json());


app.use("/pet", petRoutes);


export default app;