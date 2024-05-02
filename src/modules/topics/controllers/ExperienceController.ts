import { Response, Request } from 'express';
import ListExperienceService from '../services/ListExperienceService';
import CreateExperienceService from '../services/CreateExperienceService';

class ExperienceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const expListService = new ListExperienceService();

    const experiences = await expListService.execute();

    return response.json(experiences);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const expCreateService = new CreateExperienceService();
    const { company, startedOn, endedOn, role, description } = request.body;
    console.log(company, startedOn, endedOn, role, description);
    const experience = await expCreateService.execute({
      company,
      description,
      endedOn,
      role,
      startedOn,
    });

    return response.json(experience);
  }
}

export default ExperienceController;
