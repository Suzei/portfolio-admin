import { EntityRepository, Repository } from 'typeorm';
import Experience from '../entities/Experience';

@EntityRepository(Experience)
class ExperienceRepository extends Repository<Experience> {
  public async findById(id: string): Promise<Experience | undefined> {
    const experience = await this.findOne({
      where: {
        id,
      },
    });

    return experience;
  }
}

export default ExperienceRepository;
