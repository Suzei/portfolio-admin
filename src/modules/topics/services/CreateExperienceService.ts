import { getCustomRepository } from 'typeorm';
import Experience from '../typeorm/entities/Experience';
import ExperienceRepository from '../typeorm/repositories/ExperienceRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  company: string;
  role: string;
  description: string;
  startedOn: string;
  endedOn: string;
}

class CreateExperienceService {
  public async execute({
    company,
    description,
    endedOn,
    role,
    startedOn,
  }: IRequest): Promise<Experience> {
    const experienceRepository = getCustomRepository(ExperienceRepository);

    const companyAlreadyExists = await experienceRepository.findOne({
      where: {
        company,
      },
    });

    if (companyAlreadyExists) {
      throw new AppError('Empresa já cadastrada');
    }

    const experience = experienceRepository.create({
      company,
      description,
      role,
      endedOn,
      startedOn,
    });

    await experienceRepository.save(experience);

    return experience;
  }
}

export default CreateExperienceService;
