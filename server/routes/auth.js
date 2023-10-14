import Router from "express";
import { query } from "../index.js";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import config from "config";

const router = new Router();

router.get("/users", async (req, res) => {
  try {
    const q = `SELECT * FROM users`;
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Error on server (registration)" });
  }
});

router.post(
  "/registration",
  [
    check("email", "Uncorrected email").isEmail(),
    check("password", "Password must be longer than 6 symbols").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrected request", errors: errors.array() });
      }
      const { email, password } = req.body;

      const q = `SELECT * FROM users WHERE email = '${email}'`;

      await query(q, async (error, data) => {
        if (error) return res.json(error);

        const isUserExist = data.length > 0;
        if (isUserExist) {
          return res.status(400).json({
            status: 400,
            message: `User with email ${email} already exist`,
          });
        } else {
          const qCreate = "INSERT INTO users (`email`, `password`) VALUES(?)";
          const hashPassword = await bcrypt.hash(password, 8);
          const values = [email, hashPassword];

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
      res.send({ message: "Error on server (api/auth/registration)" });
    }
  },
);

router.post(
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
          }
        });
      });
    } catch (e) {
      console.log(e);
      res.send({ message: "Error on server (api/auth/login)" });
    }
  },
);

export default router;
