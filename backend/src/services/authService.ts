import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { IUser } from "../models/userModel";
import { Types } from "mongoose";
import * as redisService from "../services/redisService";
import crypto from "crypto";
import { logger } from "../logger";

export interface IPayload {
  id: Types.ObjectId;
  role: string;
  iat?: number;
  exp?: number;
}

export const isPasswordMatch = async (
  password: string,
  userPassword: string
): Promise<boolean> => {
  const match = await bcrypt.compare(password, userPassword);
  return match;
};

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const authenticateJWT = async (
  token: string
): Promise<IPayload | null> => {
  try {
    const payload = jwt.verify(token, config.JWT.SECRET);
    return payload as IPayload;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export const createResetPasswordToken = async (
  userEmail: string
): Promise<string> => {
  const token = crypto.randomBytes(32).toString("hex");
  await redisService.setResetPasswordToken(userEmail, token);
  return token;
};

export const createResetPasswordUrl = async (
  token: string
): Promise<string> => {
  return `https://127.0.0.1:3000/reset-password?token=${token}`;
};

export const createToken = async (user: IUser): Promise<string> => {
  const payload: IPayload = {
    id: user._id,
    role: user.role,
  };
  let token;
  token = jwt.sign(payload, config.JWT.SECRET, {
    expiresIn: config.JWT.EXPIRATION,
  });
  await redisService.deleteLoginToken(user._id.toString());
  await redisService.setLoginToken(user._id.toString(), token);
  return token;
};
