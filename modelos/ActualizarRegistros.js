import pool from "../config/conexion.js";


async function ActualizarRegistros (req, res) {
   // const { id } = req.params;
    try {
      const data = req.body;
      await pool.query("UPDATE datos SET nombres=?,apellidos=?,ciudad=?,direccion=?,telefono=?,nombre_mascota=?,genero=?,raza=?,edad=?,foto_mascota=?  WHERE id_mascota=?",
      [data.nombres,data.apellidos,data.ciudad,data.direccion,data.telefono,data.nombre_mascota,data.genero,data.raza,data.edad,data.foto_mascota,data.id]);
      return res.status(200).json({message:"Registro actualizado", resultado:data});

    } catch (error) {
      console-log(error);
      res.status(500).json({message:" ha ocurrido un error al actualizar", resultado:data });
    }
}

export default ActualizarRegistros;