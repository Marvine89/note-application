export const AuthMiddleware = (req, res, next) => {
  const token = process.env.API_KEY || 'p7u3C6kbJX110Ga';

  if (`Bearer ${token}` !== req.headers.authorization) {
    return next();
  };

  return res.status(401).send('unauthorized');
};