import express from 'express';
import  LeerRegistros  from '../modelos/LeerRegistros.js';
import  CrearRegistros  from '../modelos/CrearRegistros.js';
import  ActualizarRegistros  from '../modelos/ActualizarRegistros.js';
import  BorrarRegistro  from '../modelos/BorrarRegistros.js';
import  BuscarRegistro  from '../modelos/BuscarRegistro.js';
import CrearUsuario from '../modelos/CrearUsuario.js';
import Login from '../modelos/Login.js';
import GetRol from '../modelos/GetRol.js';
import PublicIDMimascota from '../modelos/PublicIDMimascota.js';

const router = express.Router();

router.post('/login', Login);
router.get('/public/:buscarID', PublicIDMimascota);
router.post('/getrol', GetRol);
router.get('/registros', LeerRegistros);
router.post('/crear', CrearRegistros);
router.post('/crearUsuario', CrearUsuario);
router.get('/buscar/:id', BuscarRegistro);
router.post('/actualizar', ActualizarRegistros); 
router.get('/borrar/:id', BorrarRegistro);

export default router;