import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routers/auth.js";
import cors from 'cors';
import path from "path";
import barberiasRoutes from "./routers/barberias.js"
import usuarioRoutes from "./routers/usuarios.js"
import citaRoutes from "./routers/citas.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const mongoString = process.env.MONGO_URI;
const port = process.env.PORT;
const host = process.env.HOST;

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("database connected");
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/citas", citaRoutes);
app.use("/api", auth);
app.use("/api", barberiasRoutes);
app.use("/api", usuarioRoutes);

// Error al no encontrar la ruta especificada
app.use((req, res) => {
  res.status(404).send('404: Page not found')
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
  console.log(`go to http://${host}:${port}`);
});
