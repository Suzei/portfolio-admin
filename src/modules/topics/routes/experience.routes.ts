import { Router } from 'express';
import ExperienceController from '../controllers/ExperienceController';

const experienceRoutes = Router();

const experienceController = new ExperienceController();

experienceRoutes.post('/experience', experienceController.create);
experienceRoutes.get('/experience', experienceController.index);

export default experienceRoutes;
