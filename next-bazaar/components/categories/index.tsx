export const CATEGORIES: Category[] = [
  {
    name: "Men",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "Women",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "Home & Decor",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "Beauty & Wellness",
    imgUrl: "/categories-mock/first.jpg",
  },
  {
    name: "Jewelry",
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
