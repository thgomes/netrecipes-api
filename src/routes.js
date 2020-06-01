import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipeController from './app/controllers/RecipeController';
import IngredientController from './app/controllers/IngredientController';
import StepController from './app/controllers/StepController';
import FeedController from './app/controllers/FeedController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/newrecipes', FeedController.index);

routes.get('/recipes/:id', RecipeController.show);
routes.get('/recipes', RecipeController.index);
routes.post('/recipes', RecipeController.store);
routes.put('/recipes', RecipeController.update);
routes.delete('/recipes/:id', RecipeController.delete);

routes.post('/ingredients', IngredientController.store);
routes.delete('/ingredients/:id', IngredientController.delete);

routes.post('/steps', StepController.store);
routes.delete('/steps/:id', StepController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
