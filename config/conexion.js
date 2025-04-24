import { createPool } from 'mysql2/promise';
import {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './varEnt.js';
const pool = createPool({
  host:'turntable.proxy.rlwy.net',
  user:'root',
  password:'ZMaFMbMexLgrjnAunKSmqRfVlWshWZMu',
 database:'railway',
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
