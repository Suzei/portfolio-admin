import { Request, Response } from 'express';
import ListPostService from '../services/ListPostsService';
import ShowPostService from '../services/ShowPostService';
import CreatePostService from '../services/CreatePostService';
import UpdatePostService from '../services/UpdatePostService';
import DeletePostService from '../services/DeletePostService';

export default class PostsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPosts = new ListPostService();

    const posts = await listPosts.execute();

    return response.json(posts);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showPosts = new ShowPostService();
    const { id } = request.params;
    const post = await showPosts.execute({ id });

    return response.json(post);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { text, title, resume } = request.body;

    const createPost = new CreatePostService();

    const post = await createPost.execute({ text, title, resume });

    return response.json(post);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { text, title, resume } = request.body;
    const { id } = request.params;

    const updatePost = new UpdatePostService();

    const post = await updatePost.execute({ title, text, id, resume });

    return response.json(post);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePost = new DeletePostService();

    await deletePost.execute({ id });

    return response.json({ message: 'O produto foi deletado com sucesso.' });
  }
}
