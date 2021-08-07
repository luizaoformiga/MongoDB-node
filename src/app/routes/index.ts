import { Router } from "express";
import { UserController } from "../controllers";

const routes = Router();
const routerUser = new UserController();

routes.get("/users", routerUser.index);
/*
routes.get('/users/:id', routerUser.details);
routes.put('/users/:id', routerUser.update);
routes.delete('/users/:id', routerUser.delete);
routes.post('/users', routerUser.insert);
*/

export default routes;
