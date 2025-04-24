import pool from "../config/conexion.js";


async function PublicIDMimascota(req, res) {
   const { buscarID } = req.params;
   

   if (!buscarID) {
      return res.status(400).json({ message: "no viene nada desde body" });
   }

   try {
      const consulta = await pool.query("SELECT * FROM datos WHERE publicID = ?", [buscarID]);
       if (consulta[0][0].publicID) {

         console.log(consulta[0][0].publicID);
         return res.status(201).json({ message: "exitoso, mascota existente", resultados:consulta[0]});
      } 

   } catch (error) {
      console.log(error);
      res.status(501).json({ message: "no existe la mascota con el ID", data: error.message });

   }
}



export default PublicIDMimascota;
