import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const puerto = 3000;

// Obtener el directorio actual del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, './usuarios.json');
const app = express();

const getText = () =>{
    try{
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }
    catch(err){
        Console.log(err)
    }
}

const port = 3000;
 app.get("/", (req, res) =>{
    res.send("Bienvenido a mi segunda api")
 })
 app.get("/usuarios", (req, res) =>{
    const data = getText();
    res.json(data);
 })
 app.get("/usuarios/:id", (req, res) =>{
    const  usuarios = getText();
    const userId = parseInt(req.params.id, 10);
    const usuario = usuarios.find(user => user.id === userId);
    if(usuario) {
        res.json(usuario);
    }else{
        res.status(404).send("usuario no encontrado")
    }
 })
app.listen(puerto, () =>{
    console.log("hola")
})