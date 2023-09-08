export const CATEGORIES: Category[] = [
  {
    name: "حريمى",
    imgUrl: "/categories-mock/fifth.jpg",
  },
  {
    name: "رجالى",
    imgUrl: "/categories-mock/forth.jpg",
  },
  {
    name: "الصحة والجمال",
    imgUrl: "/categories-mock/third.jpg",
  },
  {
    name: "المنزل والديكور",
    imgUrl: "/categories-mock/second.jpg",
  },
  {
    name: "إكسسوارات",
    imgUrl: "/categories-mock/first.jpg",
  },
];

export type Category = {
  name: string;
  imgUrl: string;
};

export type CategoryProps = {
  category: Category;
};
