import { Router } from 'express';
import UserController from '../controllers/userControl';

const routes = Router();
const routerUser = new UserController();

routes.post('/users', routerUser.insert);
routes.get('/users', routerUser.index);
routes.get('/users/:id', routerUser.details);
routes.put('/users/:id', routerUser.update);
routes.delete('/users/:id', routerUser.delete);

export default routes;
