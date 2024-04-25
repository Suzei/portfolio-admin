import AppError from '@shared/errors/AppError';
import Post from '@modules/posts/typeorm/entities/Post';
import { PostRepository } from '@modules/posts/typeorm/repositories/PostRepository';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  title: string;
  text: string;
  resume: string;
}

class CreatePostService {
  public async execute({ text, title, resume }: IRequest): Promise<Post> {
    const postRepository = getCustomRepository(PostRepository);

    const titleExists = await postRepository.findByTitle(title);

    if (titleExists) {
      throw new AppError('Um post com o mesmo título já existe');
    }

    if (text.length < 15) {
      throw new AppError('O post contém menos de 15 palavras.');
    }

    const post = postRepository.create({
      text,
      title,
      resume,
    });

    await postRepository.save(post);

    return post;
  }
}

export default CreatePostService;
