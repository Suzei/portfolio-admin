import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';
import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('E-mail/senha incorreto.', 401);
    }

    const comparePasswords = await compare(password, user?.password);

    if (!comparePasswords) {
      throw new AppError('E-mail/senha incorreto.', 401);
    }

    const token = sign(authConfig.jwt.secret, authConfig.jwt.expiresIn);

    return { user, token };
  }
}

export default CreateSessionService;
