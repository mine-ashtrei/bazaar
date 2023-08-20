import request from "supertest";
import { startServer, closeServer, server } from "./setupTestApp";
import { connectDB, disconnectDB } from "./setupTestDB";
import { IWorkshop } from "../src/models/workshopModel";
import { workshopUserPassword, createUser, loginUser } from "./setupUser";
import { IUser } from "../src/models/userModel";
import { MESSAGES } from "../src/common/messages";
import { checkMessage } from "./common";

describe("Workshop Routes", () => {
  let user: IUser;
  let token: string;
  beforeAll(async () => {
    await connectDB();
    startServer();
    user = await createUser(workshopUserPassword);
    token = await loginUser(workshopUserPassword);
  });

  afterAll(async () => {
    await disconnectDB();
    closeServer();
  });

  let workshop: Partial<IWorkshop>;
  let test_workshop: any = {
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
  let update_workshop: Partial<IWorkshop> = {
    address: {
      street: "456 Updated Street",
      city: "Updated City",
      state: "Updated State",
      country: "Updated Country",
      postalCode: "67890",
    },
  };

  // Test for creating a workshop
  it("should create a new workshop", async () => {
    let res = await request(server)
      .post("/api/workshops")
      .set("Authorization", `Bearer ${token}`)
      .send(test_workshop);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toMatchObject(test_workshop);
    workshop = res.body;
    res = await request(server)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id", user._id);
    expect(res.body).toHaveProperty("workshopId", workshop._id);
  });

  // Test for retrieving workshops with pagination
  it("should retrieve workshops with pagination", async () => {
    const res = await request(server)
      .get("/api/workshops?page=1&limit=10")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("total", 1);
    expect(res.body).toHaveProperty("values");
    expect(Array.isArray(res.body.values)).toBe(true);
  });

  // Test for retrieving a workshop by ID
  it("should retrieve a workshop by ID", async () => {
    const res = await request(server)
      .get(`/api/workshops/${workshop._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(test_workshop);
    expect(res.body).toHaveProperty("_id", workshop._id);
  });

  // Test for updating a workshop by ID
  it("should update a workshop by ID", async () => {
    const res = await request(server)
      .put(`/api/workshops/${workshop._id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(update_workshop);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", test_workshop.name);
    expect(res.body).toHaveProperty("address");
    expect(res.body.address).toMatchObject(update_workshop.address!);
  });

  it("should not update a workshop by id with extra data", async () => {
    const res = await request(server)
      .put(`/api/workshops/${workshop._id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ bad: "bad" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("errors");
    expect(Array.isArray(res.body.errors)).toBe(true);
  });

  // Test for deleting a workshop by ID
  it("should delete a workshop by ID", async () => {
    const res = await request(server)
      .delete(`/api/workshops/${workshop._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
  });

  // Test workshop is not retrieved after it was deleted
  it("should return an error", async () => {
    const res = await request(server)
      .get(`/api/workshops/${workshop._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(404);
    checkMessage(res.body, MESSAGES.WORKSHOP_NOT_FOUND);
  });

  it("should not create a workshop with extra data", async () => {
    const res = await request(server)
      .post("/api/workshops")
      .set("Authorization", `Bearer ${token}`)
      .send({ ...test_workshop, bad: "bad" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("errors");
    expect(Array.isArray(res.body.errors)).toBe(true);
  });
});
