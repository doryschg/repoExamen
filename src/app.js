import express, { json } from 'express';
import morgan from 'morgan';
import auth from './middlewares/auth-middleware';


//importar rutas

const app = express();

///midlewares
app.use(morgan('dev'));
app.use(json());

//routes


export default app;