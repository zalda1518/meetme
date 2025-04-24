import { createPool } from 'mysql2/promise';
import {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './varEnt.js';
const pool = createPool({
  host:DB_HOST,
  user:DB_USER,
  password:DB_PASSWORD,
  database:DB_NAME,
  port:DB_PORT
});

// para aws

 /* const pool = createPool({
  host:'localhost',
  user:'super',
  password:'Colombia31++',
  database:'demo'
});
*/

export default pool;