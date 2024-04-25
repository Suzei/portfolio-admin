import { Router } from 'express';
import { Joi, celebrate, Segments } from 'celebrate';
import UserController from '../controllers/UsersController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.get('/', userController.index);

userRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      name: Joi.string(),
      password: Joi.string().required(),
      avatar: Joi.string().optional(),
    },
  }),
  userController.create,
);

export default userRoutes;
