import AppError from '@shared/errors/AppError';
import Post from '@modules/posts/typeorm/entities/Post';
import { PostRepository } from '@modules/posts/typeorm/repositories/PostRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
  text: string;
  title: string;
  resume: string;
}

class UpdatePostService {
  public async execute({
    text,
    title,
    id,
    resume,
  }: IRequest): Promise<Post | undefined> {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(id);
    const postWithTitleAlreadyExists = await postRepository.findByTitle(title);

    if (!post) {
      throw new AppError('O post não existe');
    }

    if (postWithTitleAlreadyExists && title !== post.title) {
      throw new AppError(
        'Um nome com o mesmo tempo já existe em nossa aplicação.',
      );
    }

    post.text = text;
    post.title = title;
    post.resume = resume;

    await postRepository.save(post);

    return post;
  }
}

export default UpdatePostService;
