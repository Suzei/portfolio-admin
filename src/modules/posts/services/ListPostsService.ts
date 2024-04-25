import Post from '@modules/posts/typeorm/entities/Post';
import { PostRepository } from '@modules/posts/typeorm/repositories/PostRepository';
import { getCustomRepository } from 'typeorm';

class ListPostService {
  public async execute(): Promise<Post[]> {
    const postRepository = getCustomRepository(PostRepository);

    const posts = await postRepository.find();

    return posts;
  }
}

export default ListPostService;
