import { auth } from "./auth";
import { categories } from "./categories";
import { products } from "./products";
import { suppliers } from "./suppliers";

const API = {
  auth: auth,
  categories: categories,
  suppliers: suppliers,
  products: products,
};

export default API;
