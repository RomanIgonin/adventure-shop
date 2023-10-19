import jwt from 'jsonwebtoken';
import config from "config";

export const authMiddleware = async (req, res, next) => {
  if (req.method = 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Auth error. Token in incorrect.' });
    }
    const decodedToken = await jwt.verify(token, config.get('secretKey'));
    req.user = decodedToken;
    next()
  } catch (e) {
    return res.status(401).json({ message: 'Auth error.' });
  }
}
