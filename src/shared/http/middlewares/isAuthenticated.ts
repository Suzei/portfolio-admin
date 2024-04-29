import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface TokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // aqui pegamos o authHeader pra ver se tem algum bearer
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token JWT não existe.');
  }

  // aqui vamos fazer um split e pegar a posição um do bearer, que é o token em si
  const [_, token] = authHeader.split(' ');

  try {
    // aqui verificamos se esse token vem mesmo da nossa aplicação
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError('JWT inválid');
  }
}
