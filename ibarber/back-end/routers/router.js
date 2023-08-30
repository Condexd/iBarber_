import { Router } from "express";
const router= Router();
import usuarioModel from "../models/usuario.js";
export  default router;

router.post('/usuarios',async(req,res)=>{
    const {nombres,apellidos,numeroDocumento,password} = req.body;
    const data= new usuarioModel({
        nombres:nombres,
        apellidos:apellidos,
        documento:numeroDocumento,
        password:password
    })

    try{
        const variable= await data.save()
        res.status(200).json(variable)
    }
    catch(error){
        res.status(404).json({message:error.message})
        
    }
});
