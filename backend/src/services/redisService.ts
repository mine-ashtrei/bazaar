import redisClient from "../redis";

const getLoginKey = (userId: string) => {
  return `login_token:${userId}`;
};

const getResetPasswordKey = (userEmail: string) => {
  return `reset_password_token:${userEmail}`;
};

export const deleteLoginToken = async (userId: string) => {
  const key = getLoginKey(userId);
  await redisClient.del(key);
};

export const setLoginToken = async (userId: string, token: string) => {
  const key = getLoginKey(userId);
  await redisClient.setEx(key, 60 * 60, token);
};

export const getLoginToken = async (userId: string): Promise<string | null> => {
  const key = getLoginKey(userId);
  const token = await redisClient.get(key);
  return token;
};

export const deleteResetPasswordToken = async (userEmail: string) => {
  const key = getResetPasswordKey(userEmail);
  await redisClient.del(key);
};

export const setResetPasswordToken = async (
  userEmail: string,
  token: string
) => {
  const key = getResetPasswordKey(userEmail);
  await redisClient.setEx(key, 5 * 60, token);
};

export const getResetPasswordToken = async (
  userEmail: string
): Promise<string | null> => {
  const key = getResetPasswordKey(userEmail);
  const token = await redisClient.get(key);
  return token;
};
