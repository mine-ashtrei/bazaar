export type Supplier = {
  supplierId: string;
  name: string;
  imgUrl: string;
  categories: string[];
  // geography: string[];
  rating: number;
};

export type SupplierProps = {
  supplier: Supplier;
};

const SUPPLIERS: Supplier[] = [
  {
    supplierId: "1",
    name: "سى - تاون للسيراميك",
    imgUrl: "/suppliers-mock/first.jpg",
    categories: ["المنزل والديكور", "إكسسوارات"],
    // geography: ["القاهرة ", " مصر"],
    rating: 3.4,
  },
  {
    supplierId: "2",
    name: "بودى كير انترناشونال",
    imgUrl: "/suppliers-mock/second.jpg",
    categories: ["الصحه والجمال", "حريمى"],
    // geography: ["القاهرة ", " مصر"],
    rating: 5,
  },
  {
    supplierId: "3",
    name: "جوكار جينز",
    imgUrl: "/suppliers-mock/third.jpg",
    categories: ["حريمى", "رجال"],
    // geography: ["القاهرة ", " مصر"],
    rating: 4.2,
  },
];

export const suppliers = {
  getById: async (id: string): Promise<Supplier | undefined> => {
    return SUPPLIERS.find((cat) => cat.supplierId === id);
  },
  getAll: async (): Promise<Supplier[]> => {
    return SUPPLIERS;
  },
};
