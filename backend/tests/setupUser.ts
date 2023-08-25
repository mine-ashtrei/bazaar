import request from "supertest";
import { server } from "./setupTestApp";
import { IUser } from "../src/models/userModel";
import { ISupplier } from "../src/models/supplierModel";

export type IUserCreate = {
  email: string;
  password: string;
  role?: string;
};

export const retailerUserPassword = {
  email: "retailer@example.com",
  password: "password123",
};

export const supplierUserPassword = {
  email: "seller@example.com",
  password: "password123",
  role: "supplier",
};

export const testSupplier = {
  name: "Test Supplier",
  description: "This is a test supplier.",
  address: {
    street: "123 Test Street",
    city: "Test City",
    state: "Test State",
    country: "Test Country",
    postalCode: "12345",
  },
  contact: {
    phone: "555-555-5555",
    email: "testsupplier@example.com",
  },
};

export const createUser = async (
  user: IUserCreate = retailerUserPassword
): Promise<IUser> => {
  const ret = await request(server).post("/api/register").send(user);
  return ret.body;
};

export const createSupplier = async (token: string): Promise<ISupplier> => {
  const res = await request(server)
    .post("/api/suppliers")
    .set("Authorization", `Bearer ${token}`)
    .send(testSupplier);
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
