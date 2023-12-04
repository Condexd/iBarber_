import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routers/auth.js";
import cors from 'cors';
import barberiasRoutes from "./routers/barberias.js"
import usuarioRoutes from "./routers/usuarios.js"
import citaRoutes from "./routers/citas.js"
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js'
dotenv.config();

const mongoString = process.env.MONGO_URI;
const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("database connected");
});

app.use("/api/citas", citaRoutes);
app.use("/api", auth);
app.use("/api", barberiasRoutes);
app.use("/api", usuarioRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error al no encontrar la ruta especificada
app.use( (req, res) => {
  res.status(404).send('404: Page not found')
})

// Error no manejado del servidor
app.use( (req, res) => {
  res.status(500).send('500: Internal server error')
})

app.listen(port, () => {
  console.log(`server started at ${port}`);
  console.log(`go to http://${host}:${port}`);
});
