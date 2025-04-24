import pool from "../config/conexion.js";

async function LeerRegistros(req, res) {
   const consulta = await pool.query("SELECT * from datos");
   if (typeof consulta === 'object') {
      return res.status(200).json({ message: "registros encontrados", resultados: consulta[0] });
   }
   return res.status(500).json({ message: "ha ocurrido un error", data: [] });
}



export default LeerRegistros;