import express from 'express';
import router from './routes/index.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';




//------------------------------------------------------------------------

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);



const port = 4000;
app.listen(port, ()=> {
    console.log('en puerto 4000');
});
