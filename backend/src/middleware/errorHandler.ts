import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
  code?: string;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err.code === 'auth/invalid-token') {
    return res.status(401).json({ error: 'Invalid token' });
  }

  if (err.code === 'permission-denied') {
    return res.status(403).json({ error: 'Permission denied' });
  }

  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
};

export default errorHandler;
