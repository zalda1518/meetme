import pool from "../config/conexion.js";


async function CrearUsuario(req, res) {
   const {
     id_usuario,
     correo,
     clave
   } = req.body;
    console.log(req.body.clave);
  if (id_usuario===''||correo===''||clave==='') {
     return res.status(400).json({ message: "falta algun campo, o no esta en el formato adecuado" });
     console.log(req.body)
   }
   try {
      const Query = "INSERT INTO usuarios(id_usuario,correo,clave)VALUES(?,?,?)";

      await pool.query(Query, [id_usuario,correo,clave]);
      return res.status(201).json({ message: "datos guardados con exito en la base de datos se creo la mascota", data: [id_usuario,correo,clave] });

   } catch (error) {
      console.log(error);
      console.log(req.body)
      res.status(501).json({ message: "ha ocurrido un error inesperado", data: error.message });
   } 
}


export default CrearUsuario;