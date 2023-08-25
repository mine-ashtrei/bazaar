import request from "supertest";
import { startServer, closeServer, server } from "./setupTestApp";
import { connectDB, disconnectDB } from "./setupTestDB";
import {
  // retailerUserPassword,
  supplierUserPassword,
  createUser,
  createSupplier,
  loginUser,
} from "./setupUser";
import { IProduct } from "../src/models/productModel";
import { MESSAGES } from "../src/common/messages";
import { checkMessage } from "./common";
// import { IUser } from "../src/models/userModel";

describe("Product Routes", () => {
  // let retailerUser: IUser;
  // let sellerUser: IUser;
  let sellerToken: string;

  beforeAll(async () => {
    await connectDB();
    startServer();

    await createUser(supplierUserPassword);
    sellerToken = await loginUser(supplierUserPassword);
    await createSupplier(sellerToken);
  });

  afterAll(async () => {
    await disconnectDB();
    closeServer();
  });

  let product: Partial<IProduct>;
  let test_product: Partial<IProduct> = {
    name: "Test Product",
    description: "This is a test product.",
    msrpPrice: 19.99,
    batchPricing: [
      {
        minQuantity: 10,
        maxQuantity: 20,
        pricePerProduct: 11,
      },
    ],
    availableQuantity: 10,
  };
  let update_product: Partial<IProduct> = {
    description: "This is an updated test product.",
    msrpPrice: 24.99,
  };

  // Test for creating a product
  it("should create a new product", async () => {
    let res = await request(server)
      .post("/api/products")
      .set("Authorization", `Bearer ${sellerToken}`)
      .send(test_product);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toMatchObject(test_product);
    product = res.body;
  });

  // Test for retrieving products with pagination
  it("should retrieve products with pagination", async () => {
    const res = await request(server).get("/api/products?page=1&limit=10");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("total");
    expect(res.body).toHaveProperty("values");
    expect(Array.isArray(res.body.values)).toBe(true);
  });

  // Test for retrieving a product by ID
  it("should retrieve a product by ID", async () => {
    const res = await request(server).get(`/api/products/${product._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(test_product);
    expect(res.body).toHaveProperty("_id", product._id);
  });

  // Test for updating a product by ID
  it("should update a product by ID", async () => {
    const res = await request(server)
      .put(`/api/products/${product._id}`)
      .set("Authorization", `Bearer ${sellerToken}`)
      .send(update_product);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", test_product.name);
    expect(res.body).toMatchObject(update_product);
  });

  // Test for deleting a product by ID
  it("should delete a product by ID", async () => {
    const res = await request(server)
      .delete(`/api/products/${product._id}`)
      .set("Authorization", `Bearer ${sellerToken}`);
    expect(res.statusCode).toEqual(204);
  });

  // Test product is not retrieved after it was deleted
  it("should return an error", async () => {
    const res = await request(server).get(`/api/products/${product._id}`);
    expect(res.statusCode).toEqual(404);
    checkMessage(res.body, MESSAGES.PRODUCT_NOT_FOUND);
  });

  describe("GET /presigned-url", () => {
    it("should return a 400 error if the fileName query parameter is missing", async () => {
      const res = await request(server).get("/api/products/presigned-url");
      expect(res.statusCode).toEqual(400);
      // TODO: double error messages ???
      //[{"location": "query", "msg": "Invalid value", "path": "fileName", "type": "field"},
      // {"location": "query", "msg": "Invalid value", "path": "fileName", "type": "field"}]
      // expect(res.body.errors).toContain(
      //   expect.arrayContaining([
      //     {
      //       msg: "Invalid value",
      //       param: "fileName",
      //       location: "query",
      //     },
      //   ])
      // );
    });

    it("should return a presigned URL if the fileName query parameter is provided", async () => {
      const fileName = "test-image.jpg";
      const res = await request(server).get(
        `/api/products/presigned-url?fileName=${fileName}`
      );
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("presignedUrl");
      expect(res.body).toHaveProperty("objectName");
    });
  });
});
