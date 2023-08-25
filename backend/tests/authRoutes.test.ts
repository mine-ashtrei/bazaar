import request from "supertest";
import { startServer, closeServer, server } from "./setupTestApp";
import { connectDB, disconnectDB } from "./setupTestDB";
import { createUser, retailerUserPassword } from "./setupUser";

describe("Auth Route", () => {
  let user = retailerUserPassword;

  beforeAll(async () => {
    await connectDB();
    startServer();
    await createUser(user);
  });

  afterAll(async () => {
    await disconnectDB();
    closeServer();
  });

  let authToken: string = "";

  // Test for logging in a user
  it("should log in a user and return an auth token", async () => {
    const res = await request(server).post("/api/login").send(user);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    authToken = res.body.token;
  });

  // Test cannot retrieve user without authorization
  it("should deny access to user without authentication", async () => {
    const res = await request(server).get(`/api/users/me`);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("description");
    expect(res.body).toHaveProperty("summary");
    expect(res.body).toHaveProperty("userAction");
  });

  // Test for getting the current user data
  it("should get the current user data with the auth token", async () => {
    const res = await request(server)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${authToken}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("email", user.email);
  });

  // Test cannot retrieve user with bad token
  it("should deny access with bad token", async () => {
    const res = await request(server)
      .get(`/api/users/me`)
      .set("Authorization", `Bearer bad${authToken}`);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("description");
    expect(res.body).toHaveProperty("summary");
    expect(res.body).toHaveProperty("userAction");
  });

  // Test for logging out a user
  it("should log out a user and invalidate the auth token", async () => {
    const res = await request(server)
      .post("/api/logout")
      .set("Authorization", `Bearer ${authToken}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("summary", "Logout");
    expect(res.body).toHaveProperty("userAction", "None");
    expect(res.body).toHaveProperty("description");
  });

  // Test for ensuring the auth token is invalidated after logout
  it("should not be able to get the current user data with an invalidated auth token", async () => {
    const res = await request(server)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${authToken}`);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("summary");
    expect(res.body).toHaveProperty("userAction", "Retry");
    expect(res.body).toHaveProperty("description");
  });

  const updatedUser = {
    email: user.email,
    password: "newpassword123",
  };
  let resetPasswordToken = "";
  it("should generate a reset-password token", async () => {
    const res = await request(server).post("/api/forgot-password").send({
      email: user.email,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    resetPasswordToken = res.body.token;
  });

  it("should reset a user password", async () => {
    // reset password
    const res = await request(server)
      .post("/api/reset-password")
      .send({
        ...updatedUser,
        token: resetPasswordToken,
      });
    expect(res.statusCode).toEqual(200);
  });

  it("should allow login with new password", async () => {
    // check login
    const res = await request(server).post("/api/login").send(updatedUser);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    // check login with bad pass
  });

  it("should deny login with old password", async () => {
    const res = await request(server).post("/api/login").send(user);
    expect(res.statusCode).toEqual(401);
  });
});
