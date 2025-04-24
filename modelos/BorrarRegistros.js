import pool from "../config/conexion.js";

async function BorrarRegistro(req, res) {
   const { id } = req.params

   try {
      
      const data = await pool.query("SELECT * FROM tabla_demo WHERE id = ?", [id] );

      await pool.query("DELETE FROM tabla_demo WHERE id = ?", [id] );

      return res.status(200).json({message:"registro eliminado", data:data[0]});
   } catch (error) {
      res.status(500).json({message:"ha ocurrido un error", data:data[0] });
   }
}

export default BorrarRegistro;