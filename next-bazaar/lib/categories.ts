const CATEGORIES: Category[] = [
  {
    id: "0",
    name: "حريمى",
    imgUrl: "/categories-mock/fifth.jpg",
  },
  {
    id: "1",
    name: "رجالى",
    imgUrl: "/categories-mock/forth.jpg",
  },
  {
    id: "2",
    name: "الصحة والجمال",
    imgUrl: "/categories-mock/third.jpg",
  },
  {
    id: "3",
    name: "المنزل والديكور",
    imgUrl: "/categories-mock/second.jpg",
  },
  {
    id: "4",
    name: "إكسسوارات",
    imgUrl: "/categories-mock/first.jpg",
  },
];

export type Category = {
  id: string;
  name: string;
  imgUrl: string;
};

export const categories = {
  get: async (id?: string): Promise<Category | Category[] | undefined> => {
    if (id) {
      return CATEGORIES.find((cat) => cat.id === id);
    }
    return CATEGORIES;
  },
  getAll: async (): Promise<Category[]> => {
    return CATEGORIES;
  },
};
