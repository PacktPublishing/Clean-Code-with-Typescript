export type RequestLike = {
  user: {
    role: string;
  };
};

export type ResponseLike = {
  status: (code: number) => {
    send: (message: string) => string;
  };
};

export type NextFunctionLike = () => string;

export function isAdmin(
  req: RequestLike,
  res: ResponseLike,
  next: NextFunctionLike
): string {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access Denied');
  }

  return next();
}
