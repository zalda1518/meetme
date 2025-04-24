import pool from "../config/conexion.js";



async function Login(req, res) {
   const {
      correo,
      clave
   } = req.body;


   if (correo === '' || clave === '') {
      return res.status(400).json({ message: "falta algun campo, o no esta en el formato adecuado" });
   }

   try {
      const usuarios = await pool.query("SELECT * FROM usuarios WHERE correo = ? AND clave = ?", [correo, clave]);

      if (usuarios[0][0].correo === correo && usuarios[0][0].clave === clave) {
         return res.status(201).json({ message: "exitoso, usuario existente", resultados: usuarios[0][0] });
      }

   } catch (error) {
      console.log(error);
      res.status(501).json({ message: "contraseña o usuario mal incorrectos", data: error.message });

   }
}



export default Login;