import express, { NextFunction, Request, Response } from "express";
import Email from "../models/emailModel";

const router = express.Router();

router
  .route("/")
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const newEmail = new Email({ email });
      const savedEmail = await newEmail.save();
      res.status(201).json(savedEmail);
    } catch (error) {
      next(error);
    }
  });

export default router;
