import { baseClient } from "./api";

type LoginPayload = {
  email: string;
  password: string;
};

export const auth = {
  login: async (payload: LoginPayload) => {
    return await baseClient({
      endpoint: "/login",
      method: "POST",
      data: payload,
    });
  },

  getCurrentUser: async (token?: string) => {
    return await baseClient({
      endpoint: "/users/me",
      method: "GET",
      token: token,
    });
  },

  refreshToken: async (token?: string) => {
    return await baseClient({
      endpoint: "/refresh-token",
      method: "POST",
      token: token,
    });
  },
};
