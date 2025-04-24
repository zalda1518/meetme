const  PORT = process.env.PORT ||  4000;

const  DB_HOST = process.env.DB_HOST ||  'localhost';
const  DB_USER = process.env.DB_USER ||  'root';
const  DB_PASSWORD = process.env.DB_PASSWORD ||  '';
const  DB_NAME = process.env.DB_NAME ||  'db_main';
const  DB_PORT   = process.env.DB_PORT ||  3306;





export { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME,DB_PORT };