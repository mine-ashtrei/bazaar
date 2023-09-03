export const CATEGORIES: Category[] = [
  {
    name: "حريمى",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "رجالى",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "الصحة والجمال",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "المنزل والديكور",
    imgUrl: "/categories-mock/first.jpg",
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
