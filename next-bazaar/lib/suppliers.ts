export type Supplier = {
  supplierId: string;
  name: string;
  imgUrl: string;
  categories: string[];
  about: string;
  // geography: string[];
  rating: number;
  instagram?: string;
  facebook?: string;
  email: string;
  enstablished: string;
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
    about:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر",
    email: "test@example.com",
    enstablished: "2020",
  },
  {
    supplierId: "2",
    name: "بودى كير انترناشونال",
    imgUrl: "/suppliers-mock/second.jpg",
    categories: ["الصحه والجمال", "حريمى"],
    // geography: ["القاهرة ", " مصر"],
    rating: 5,
    about:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر",
    email: "test@example.com",
    enstablished: "2020",
  },
  {
    supplierId: "3",
    name: "جوكار جينز",
    imgUrl: "/suppliers-mock/third.jpg",
    categories: ["حريمى", "رجال"],
    // geography: ["القاهرة ", " مصر"],
    rating: 4.2,
    about:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر",
    email: "test@example.com",
    enstablished: "2020",
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
