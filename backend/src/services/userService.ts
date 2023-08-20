import User, { IUser } from "../models/userModel";
import { Types } from "mongoose";
import * as authService from "../services/authService";

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email: email });
  return user;
};

const updateHashedPassword = async (
  userData: Partial<IUser>
): Promise<Partial<IUser>> => {
  if (userData.password) {
    const hashedPassword = await authService.hashPassword(
      userData.password as string
    );
    if (hashedPassword == null) {
      throw new Error("Cannot hash password");
    }
    userData.password = hashedPassword!;
  }
  return userData;
};

export const createUser = async (userData: IUser) => {
  userData = (await updateHashedPassword(userData)) as IUser;
  const newUser = new User(userData);
  const savedUser = await newUser.save();
  return savedUser;
};

export const getUserById = async (
  userId: Types.ObjectId
): Promise<IUser | null> => {
  const user = await User.findOne({ _id: userId });
  return user;
};

export const deleteUserById = async (
  userId: Types.ObjectId
): Promise<IUser | null> => {
  return await User.findByIdAndRemove(userId).exec();
};

export const updateUserById = async (
  userId: Types.ObjectId,
  userData: Partial<IUser>
): Promise<IUser | null> => {
  userData = await updateHashedPassword(userData);
  userData.updatedAt = new Date(Date.now());
  const updatedUser = await User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
  });
  return updatedUser;
};
