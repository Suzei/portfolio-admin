import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UserRepository';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}
class CreateUserService {
  public async execute({
    email,
    name,
    password,
    avatar,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const checkIfEmailAlreadyExists = await userRepository.findByEmail(email);

    if (checkIfEmailAlreadyExists) {
      throw new AppError('E-mail já cadastrado!');
    }

    const passwordHashed = await hash(password, 8);

    const user = userRepository.create({
      email,
      name,
      avatar,
      password: passwordHashed,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
