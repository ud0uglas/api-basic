import { Request, Response, NextFunction } from 'express';

export const errorHandler = (req: Request, res: Response, next: NextFunction) => {
  const statusCode =  500;
  const message = "Erro no servidor";

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
};