import request from "supertest";
import { startServer, closeServer, server } from "./setupTestApp";
import { connectDB, disconnectDB } from "./setupTestDB";
import { ISupplier } from "../src/models/supplierModel";
import { supplierUserPassword, createUser, loginUser } from "./setupUser";
import { IUser } from "../src/models/userModel";
import { MESSAGES } from "../src/common/messages";
import { checkMessage } from "./common";

describe("Supplier Routes", () => {
  let user: IUser;
  let token: string;
  beforeAll(async () => {
    await connectDB();
    startServer();
    user = await createUser(supplierUserPassword);
    token = await loginUser(supplierUserPassword);
  });

  afterAll(async () => {
    await disconnectDB();
    closeServer();
  });

  let supplier: Partial<ISupplier>;
  let test_supplier: any = {
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
  let update_supplier: Partial<ISupplier> = {
    address: {
      street: "456 Updated Street",
      city: "Updated City",
      state: "Updated State",
      country: "Updated Country",
      postalCode: "67890",
    },
  };

  // Test for creating a supplier
  it("should create a new supplier", async () => {
    let res = await request(server)
      .post("/api/suppliers")
      .set("Authorization", `Bearer ${token}`)
      .send(test_supplier);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toMatchObject(test_supplier);
    supplier = res.body;
    res = await request(server)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id", user._id);
    expect(res.body).toHaveProperty("supplierId", supplier._id);
  });

  // Test for retrieving suppliers with pagination
  it("should retrieve suppliers with pagination", async () => {
    const res = await request(server)
      .get("/api/suppliers?page=1&limit=10")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("total", 1);
    expect(res.body).toHaveProperty("values");
    expect(Array.isArray(res.body.values)).toBe(true);
  });

  // Test for retrieving a supplier by ID
  it("should retrieve a supplier by ID", async () => {
    const res = await request(server)
      .get(`/api/suppliers/${supplier._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(test_supplier);
    expect(res.body).toHaveProperty("_id", supplier._id);
  });

  // Test for updating a supplier by ID
  it("should update a supplier by ID", async () => {
    const res = await request(server)
      .put(`/api/suppliers/${supplier._id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(update_supplier);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", test_supplier.name);
    expect(res.body).toHaveProperty("address");
    expect(res.body.address).toMatchObject(update_supplier.address!);
  });

  it("should not update a supplier by id with extra data", async () => {
    const res = await request(server)
      .put(`/api/suppliers/${supplier._id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ bad: "bad" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("errors");
    expect(Array.isArray(res.body.errors)).toBe(true);
  });

  // Test for deleting a supplier by ID
  it("should delete a supplier by ID", async () => {
    const res = await request(server)
      .delete(`/api/suppliers/${supplier._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
  });

  // Test supplier is not retrieved after it was deleted
  it("should return an error", async () => {
    const res = await request(server)
      .get(`/api/suppliers/${supplier._id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toEqual(404);
    checkMessage(res.body, MESSAGES.SUPPLIER_NOT_FOUND);
  });

  it("should not create a supplier with extra data", async () => {
    const res = await request(server)
      .post("/api/suppliers")
      .set("Authorization", `Bearer ${token}`)
      .send({ ...test_supplier, bad: "bad" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("errors");
    expect(Array.isArray(res.body.errors)).toBe(true);
  });
});
