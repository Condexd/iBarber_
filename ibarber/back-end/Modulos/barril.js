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
export { Router, bcrypt, nodemailer, crypto, jwt, dotenv, usuarioModel, BarberiaModel,correoelectronico };
