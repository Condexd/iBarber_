import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routers/router.js";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());

const mongoString = process.env.MONGO_URI;
const port = process.env.PORT;
const host = process.env.HOST;

console.log(mongoString);
console.log(port);
console.log(host);


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

app.use("/api",router);

app.listen(port, () => {
  console.log(`server started at ${port}`);
  console.log(`go to http://${host}:${port}`);
});
