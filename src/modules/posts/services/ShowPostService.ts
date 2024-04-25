import AppError from '@shared/errors/AppError';
import Post from '@modules/posts/typeorm/entities/Post';
import { PostRepository } from '@modules/posts/typeorm/repositories/PostRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
}
class ShowPostService {
  public async execute({ id }: IRequest): Promise<Post | undefined> {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(id);

    if (!post) {
      throw new AppError('O post não existe!');
    }

    return post;
  }
}

export default ShowPostService;
