import postsRouter from '@modules/posts/routes/posts.routes';
import userRoutes from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/posts', postsRouter);
routes.use('/users', userRoutes);

export default routes;
