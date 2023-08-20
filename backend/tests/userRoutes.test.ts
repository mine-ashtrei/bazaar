import request from "supertest";
import { startServer, closeServer, server } from "./setupTestApp";
import { connectDB, disconnectDB } from "./setupTestDB";
import { IUser } from "../src/models/userModel";

describe("User Routes", () => {
  beforeAll(async () => {
    await connectDB();
    startServer();
  });

  afterAll(async () => {
    await disconnectDB();
    closeServer();
  });

  let user: Partial<IUser>;
  let test_user = {
    email: "test@example.com",
    password: "password123",
  };
  let update_user = {
    email: "updated@example.com",
    password: "newpassword123",
  };
  let token: string;
  // Test for creating a user
  it("should create a new user", async () => {
    const res = await request(server).post("/api/register").send(test_user);
    user = res.body;
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("email", test_user.email);
    expect(res.body).not.toHaveProperty("password");
  });
  // Test user login
  it("should login the user", async () => {
    const res = await request(server).post("/api/login").send(test_user);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });
  // Test for retrieving a user
  it("should retrieve a user by ID", async () => {
    const res = await request(server)
      .get(`/api/users/${user._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("email", test_user.email);
    expect(res.body).toStrictEqual(user);
    expect(res.body).not.toHaveProperty("password");
  });
  // Test for updating a user
  it("should update a user by ID", async () => {
    const res = await request(server)
      .put(`/api/users/${user._id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(update_user);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("email", update_user.email);
    expect(res.body).not.toHaveProperty("password");
  });
  // Test for deleting a user
  it("should delete a user by ID", async () => {
    const res = await request(server)
      .delete(`/api/users/${user._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
  });
  // Test user is not retrieved after it was deleted
  it("should return an error", async () => {
    const res = await request(server)
      .get(`/api/users/${user._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("description");
    expect(res.body).toHaveProperty("summary");
    expect(res.body).toHaveProperty("userAction");
  });
});
