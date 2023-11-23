import Router from "express";
import { query } from "../index.js";

const cartRouter = new Router();

cartRouter.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const q = `SELECT * FROM cart WHERE userId = '${userId}'`;
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /cart" });
  }
});

cartRouter.post(
  "/", async (req, res) => {
    try {
      const { userId, productId, name, imageUrl, price } = req.body;
      const qCreate = "INSERT INTO cart (`userId`, `productId`, `name`, `imageUrl`, `price`) VALUES(?)";
      const values = [userId, productId, name, imageUrl, price];

      await query(qCreate, [values], (error) => {
        if (error) {
          return res.status(400).json({error: error});
        } else {
          return res.json({
            message: "Product successfully added to cart",
          });
        }
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Error on server POST /cart)' });
    }
  },
);

cartRouter.post(
  "/removeProduct", async (req, res) => {
    try {
      const { id } = req.body;
      const q = `DELETE FROM cart WHERE id = '${id}'`;

      await query(q, (error) => {
        if (error) {
          return res.status(400).json({error: error});
        } else {
          return res.json({
            message: "Product successfully remove from cart",
          });
        }
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Error on server POST /cart)' });
    }
  },
);

cartRouter.post(
  "/removeUserProducts", async (req, res) => {
    try {
      const { userId } = req.body;
      const q = `DELETE FROM cart WHERE userId = '${userId}'`;

      await query(q, (error) => {
        if (error) {
          return res.status(400).json({error: error});
        } else {
          return res.json({
            message: "Products successfully remove from cart",
          });
        }
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Error on server POST /cart)' });
    }
  },
);

export default cartRouter;
