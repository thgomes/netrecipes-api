import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipeController from './app/controllers/RecipeController';
import IngredientController from './app/controllers/IngredientController';
import StepController from './app/controllers/StepController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/recipes', RecipeController.store);
routes.put('/recipes', RecipeController.update);
routes.delete('/recipes/:id', RecipeController.delete);

routes.post('/ingredients', IngredientController.store);
routes.delete('/ingredients/:id', IngredientController.delete);

routes.post('/steps', StepController.store);
routes.delete('/steps/:id', StepController.delete);

export default routes;
