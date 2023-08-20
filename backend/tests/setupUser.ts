import request from "supertest";
import { server } from "./setupTestApp";
import { IUser } from "../src/models/userModel";
import { IWorkshop } from "../src/models/workshopModel";

export type IUserCreate = {
  email: string;
  password: string;
  role?: string;
};

export const buyerUserPassword = {
  email: "buyer@example.com",
  password: "password123",
};

export const workshopUserPassword = {
  email: "seller@example.com",
  password: "password123",
  role: "workshop",
};

export const testWorkshop = {
  name: "Test Workshop",
  description: "This is a test workshop.",
  address: {
    street: "123 Test Street",
    city: "Test City",
    state: "Test State",
    country: "Test Country",
    postalCode: "12345",
  },
  contact: {
    phone: "555-555-5555",
    email: "testworkshop@example.com",
  },
};

export const createUser = async (
  user: IUserCreate = buyerUserPassword
): Promise<IUser> => {
  const ret = await request(server).post("/api/register").send(user);
  return ret.body;
};

export const createWorkshop = async (token: string): Promise<IWorkshop> => {
  const res = await request(server)
    .post("/api/workshops")
    .set("Authorization", `Bearer ${token}`)
    .send(testWorkshop);
  return res.body;
};

export const loginUser = async (user: IUserCreate): Promise<string> => {
  const { email, password } = user;
  const res = await request(server).post("/api/login").send({
    email: email,
    password: password,
  });
  const token = res.body.token;
  return token;
};
