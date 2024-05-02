import { Router } from 'express';
import experienceRoutes from './experience.routes';

const topicsRoutes = Router();

topicsRoutes.use('/', experienceRoutes);

export default topicsRoutes;
