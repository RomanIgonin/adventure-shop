import Router from "express";
import { query } from "../index.js";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import config from "config";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = new Router();

authRouter.get("/users", async (req, res) => {
  try {
    const q = `SELECT * FROM users`;
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Error on server (/users)" });
  }
});

authRouter.post(
  "/registration",
  [
    check("email", "Uncorrected email").isEmail(),
    check("password", "Password must be longer than 8 symbols").isLength({
      min: 8,
    }),
    check("firstName", "Uncorrected first name").isString(),
    check("lastName", "Uncorrected last name").isString(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrected request", errors: errors.array() });
      }
      const { email, password, firstName, lastName } = req.body;

      const q = `SELECT * FROM users WHERE email = '${email}'`;

      await query(q, async (error, data) => {
        if (error) return res.json(error);

        const isUserExist = data.length > 0;
        if (isUserExist) {
          return res.status(400).json({
            message: `User with email ${email} already exist`,
          });
        } else {
          const qCreate = "INSERT INTO users (`email`, `password`, `firstName`, `lastName`) VALUES(?)";
          const hashPassword = await bcrypt.hash(password, 8);
          const values = [email, hashPassword, firstName, lastName];

          await query(qCreate, [values], (error) => {
            if (error) {
              return res.status(400).json({ error: error });
            } else {
              return res.json({
                message: "User has been created successfully",
              });
            }
          });
        }
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Error on server (auth/registration)' });
    }
  },
);

authRouter.post(
  "/login",
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const q = `SELECT * FROM users WHERE email = '${email}'`;

      await query(q, (error, data) => {
        if (error) return res.json(error);

        const isUserExist = data.length > 0;
        const user = isUserExist && data[0];
        if (isUserExist) {
          const isPassValid = bcrypt.compareSync(password, user.password);
          if (!isPassValid) return res.status(400).json({message: 'Invalid password'})
        } else {
          return res.status(400).json({message: 'User not found'});
        }

        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'});
        return res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          }
        });
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Error on server (auth/login)' });
    }
  },
);

authRouter.get(
  "/auth", authMiddleware,
  async (req, res) => {
    try {
      const userId = req.user.user.id;
      const q = `SELECT * FROM users WHERE id = '${userId}'`;

      await query(q, async (error, data) => {
        if (error) return res.json(error);

        const isUserExist = data.length > 0;
        const user = isUserExist && data[0];

        const token = await jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'});
        return res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          }
        });
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Error on server (auth/auth)' });
    }
  },
);

export default authRouter;
