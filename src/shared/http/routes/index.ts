import postsRouter from '@modules/posts/routes/posts.routes';
import sessionsRoutes from '@modules/users/routes/session.routes';
import userRoutes from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/posts', postsRouter);
routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
