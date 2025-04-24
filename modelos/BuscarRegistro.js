import pool from "../config/conexion.js";

async function BuscarRegistro(req, res) {
   const { id }  = req.params;
   
   if(id !== undefined) {
      const registro = await pool.query("SELECT * FROM datos WHERE id_mascota = ?", [id]);
      if(registro !== null){
         return res.status(200).json(({message: "registro encontrado", registro:registro[0] }));
      }
      
   }
}

export default BuscarRegistro;