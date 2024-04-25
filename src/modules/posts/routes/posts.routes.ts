import { Router } from 'express';
import PostsController from '../controllers/PostsController';
import { celebrate, Joi, Segments } from 'celebrate';
const postsRouter = Router();
const postsController = new PostsController();

postsRouter.get('/', postsController.index);

postsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid(),
    },
  }),
  postsController.show,
);

postsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      text: Joi.string().min(15).required(),
      resume: Joi.string(),
    },
  }),
  postsController.create,
);

postsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },

    [Segments.BODY]: {
      title: Joi.string().required(),
      text: Joi.string().min(15).required(),
      resume: Joi.string(),
    },
  }),
  postsController.update,
);

postsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  postsController.delete,
);

export default postsRouter;
