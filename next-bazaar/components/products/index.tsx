export type Product = {
  id: string;
  name: string;
  description: string;
  supplierId: string;
  categoryId: string;
  msrpPrice: number;
  batchPricing: {
    minQuantity: number;
    maxQuantity: number;
    pricePerProduct: number;
  }[];
  availableQuantity: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "خاتم ذهب",
    description: "خاتم ذهب فاخر مع حجر زمرد",
    supplierId: "1",
    categoryId: "1",
    msrpPrice: 3000,
    batchPricing: [
      { minQuantity: 1, maxQuantity: 10, pricePerProduct: 2900 },
      { minQuantity: 11, maxQuantity: 50, pricePerProduct: 2800 },
    ],
    availableQuantity: 100,
    images: ["/products-mock/first.jpg"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "قميص رجالي",
    description: "قميص رجالي من القطن الناعم",
    supplierId: "2",
    categoryId: "2",
    msrpPrice: 500,
    batchPricing: [
      { minQuantity: 1, maxQuantity: 5, pricePerProduct: 480 },
      { minQuantity: 6, maxQuantity: 20, pricePerProduct: 460 },
    ],
    availableQuantity: 200,
    images: ["/products-mock/first.jpg"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "فستان نسائي",
    description: "فستان نسائي أنيق مناسب للمناسبات",
    supplierId: "3",
    categoryId: "3",
    msrpPrice: 800,
    batchPricing: [
      { minQuantity: 1, maxQuantity: 3, pricePerProduct: 780 },
      { minQuantity: 4, maxQuantity: 10, pricePerProduct: 750 },
    ],
    availableQuantity: 150,
    images: ["/products-mock/first.jpg"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "زينة منزلية",
    description: "زينة منزلية راقية للصالون",
    supplierId: "1",
    categoryId: "4",
    msrpPrice: 600,
    batchPricing: [
      { minQuantity: 1, maxQuantity: 4, pricePerProduct: 580 },
      { minQuantity: 5, maxQuantity: 15, pricePerProduct: 560 },
    ],
    availableQuantity: 80,
    images: ["/products-mock/first.jpg"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "كريم الوجه",
    description: "كريم الوجه الطبيعي للبشرة الجافة",
    supplierId: "2",
    categoryId: "5",
    msrpPrice: 250,
    batchPricing: [
      { minQuantity: 1, maxQuantity: 6, pricePerProduct: 240 },
      { minQuantity: 7, maxQuantity: 20, pricePerProduct: 230 },
    ],
    availableQuantity: 300,
    images: ["/products-mock/first.jpg"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];