export type Supplier = {
  name: string;
  imgUrl: string;
  categories: string[];
  geography: string[];
  rating: number;
};

export type SupplierProps = {
  supplier: Supplier;
};

export const SUPPLIERS: Supplier[] = [
  {
    name: "C-Town Ceramics",
    imgUrl: "/suppliers-mock/first.jpg",
    categories: ["Jewelry", "Home & Decor"],
    geography: ["Anywhere", "Egypt"],
    rating: 3.4,
  },
  {
    name: "Body Care International",
    imgUrl: "/suppliers-mock/first.jpg",
    categories: ["Beauty & Wellness", "Women"],
    geography: ["Anywhere", "Egypt"],
    rating: 5,
  },
  {
    name: "Dapper Denim",
    imgUrl: "/suppliers-mock/first.jpg",
    categories: ["Men", "Women"],
    geography: ["Anywhere", "Egypt"],
    rating: 4.2,
  },
];
