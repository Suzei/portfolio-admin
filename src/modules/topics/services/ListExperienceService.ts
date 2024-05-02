import { getCustomRepository } from 'typeorm';
import Experience from '../typeorm/entities/Experience';
import ExperienceRepository from '../typeorm/repositories/ExperienceRepository';
import { intervalToDuration } from 'date-fns';

class ListExperienceService {
  public async execute(): Promise<Experience[]> {
    const experienceRepository = getCustomRepository(ExperienceRepository);
    const experiences = await experienceRepository.find();

    const experiencesWithTotalYears = experiences.map(item => {
      return {
        ...item,
        totalYears: intervalToDuration({
          start: item.startedOn,
          end: item.endedOn,
        }).years,
      };
    });

    return experiencesWithTotalYears;
  }
}

export default ListExperienceService;
