import { getCustomRepository } from 'typeorm';
import ExperienceRepository from '../typeorm/repositories/ExperienceRepository';
import AppError from '@shared/errors/AppError';

interface IRequestOne {
  id: string;
}

class DeleteExperienceService {
  public async executeOne({ id }: IRequestOne): Promise<void> {
    const experienceRepository = getCustomRepository(ExperienceRepository);

    const experience = await experienceRepository.findById(id);

    if (!experience) {
      throw new AppError('Essa experiência não existe na base de dados');
    }

    await experienceRepository.remove(experience);
  }
}

export default DeleteExperienceService;
