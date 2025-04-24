import pool from "../config/conexion.js";


async function CrearRegistros(req, res) {
   const {
      id_mascota,
      publicID,
      nombres,
      apellidos,
      dueño_mascota,
      ciudad,
      direccion,
      telefono,
      nombre_mascota,
      genero,
      tipo_animal,
      raza,
      edad,
      foto_mascota
   } = req.body;
   
   if (nombres===''||apellidos===''||dueño_mascota===''||ciudad===''||direccion===''||telefono===''||nombre_mascota===''||genero===''||tipo_animal===''||raza===''||edad===''||foto_mascota===''){
      return res.status(400).json({ message: "falta algun campo, o no esta en el formato adecuado" });
   }
  try {
     const Query = "INSERT INTO datos(id_mascota,publicID,nombres,apellidos,dueño_mascota,ciudad,direccion,telefono,nombre_mascota,genero,tipo_animal,raza,edad,foto_mascota)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 

     await pool.query(Query, [id_mascota,publicID,nombres,apellidos,dueño_mascota,ciudad,direccion,telefono,nombre_mascota,genero,tipo_animal,raza,edad,foto_mascota]);
     return res.status(201).json({message:"datos guardados con exito en la base de datos se creo la mascota", data: [nombre_mascota,raza,genero,publicID]});
    
   } catch (error) {
      console.log(error);
      res.status(501).json({message:"ha ocurrido un error inesperado", data: error.message});
   }
}


export default CrearRegistros;