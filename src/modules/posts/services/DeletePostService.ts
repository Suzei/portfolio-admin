import AppError from '@shared/errors/AppError';
import { PostRepository } from '@modules/posts/typeorm/repositories/PostRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
}
class DeletePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(id);

    if (!post) {
      throw new AppError('O post que você está tentando excluir não existe');
    }

    await postRepository.remove(post);
  }
}

export default DeletePostService;
