import { auth } from "./auth";
import { categories } from "./categories";
import { orders } from "./orders";
import { products } from "./products";
import { suppliers } from "./suppliers";

const API = {
  auth: auth,
  categories: categories,
  suppliers: suppliers,
  products: products,
  orders: orders,
};

export default API;