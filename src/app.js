import express, { json } from 'express';
import morgan from 'morgan';

//importar rutas

import proyectoRoutes from './routes/proyecto';
import tareaRoutes from './routes/tarea';
import usuarioRoutes from './routes/usuario';
import auth from './middlewares/auth-middleware';

const app = express();

///midlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/proyectos',auth,proyectoRoutes);
app.use('/api/tareas',tareaRoutes);
app.use('/api/autenticacion',usuarioRoutes);

export default app;