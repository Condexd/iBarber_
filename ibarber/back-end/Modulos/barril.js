// barril.js
import { Router } from "express";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import usuarioModel from "../models/usuario.js";
import BarberiaModel from "../models/barberias.js";
import {correoelectronico} from "./html.js"
import {correoelectronicoConfirmacion} from "./html_citas.js"
import { enviarCorreo } from "./nodemailer.js";
import citaModel from "../models/citas.js"
import { verificarTokenYObtenerUsuario } from "../middleware/authMiddleware.js";
import { promises as fsPromises } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import Review from "../models/resenas.js";



export { Router, bcrypt, nodemailer, crypto, jwt, dotenv, usuarioModel, BarberiaModel,correoelectronico,enviarCorreo,citaModel,correoelectronicoConfirmacion,verificarTokenYObtenerUsuario 
,fsPromises,path,fileURLToPath,dirname,Review
};
