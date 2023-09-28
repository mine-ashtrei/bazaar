const CATEGORIES: Category[] = [
  {
    categoryId: "0",
    name: "حريمى",
    imgUrl: "/categories-mock/fifth.jpg",
  },
  {
    categoryId: "1",
    name: "رجالى",
    imgUrl: "/categories-mock/forth.jpg",
  },
  {
    categoryId: "2",
    name: "الصحة والجمال",
    imgUrl: "/categories-mock/third.jpg",
  },
  {
    categoryId: "3",
    name: "المنزل والديكور",
    imgUrl: "/categories-mock/second.jpg",
  },
  {
    categoryId: "4",
    name: "إكسسوارات",
    imgUrl: "/categories-mock/first.jpg",
  },
];

export type Category = {
  categoryId: string;
  name: string;
  imgUrl: string;
};

export const categories = {
  getById: async (id: string): Promise<Category | undefined> => {
    return CATEGORIES.find((cat) => cat.categoryId === id);
  },
  getAll: async (): Promise<Category[]> => {
    return CATEGORIES;
  },
};
