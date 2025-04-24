import pool from "../config/conexion.js";

async function GetRol(req, res) {
    const { id_usuario } = req.body;
  
  
     if (!id_usuario) {
        return res.status(400).json({ message: "falta algun campo, o no esta en el formato adecuado" });
     }
  
     try {
        const usuarios = await pool.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id_usuario]);
  
        if (usuarios[0][0].id_usuario === id_usuario ) {
            console.log(usuarios[0][0])
           return res.status(201).json({ message: "exitoso, usuario existente", resultados: usuarios[0][0] });
        }
  
     } catch (error) {
        console.log(error);
        res.status(501).json({ message: "contraseña o usuario mal incorrectos", data: error.message });
  
     }
 }
 
 export default GetRol;
 