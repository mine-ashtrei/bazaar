import CategoryCard from "./card";
import Carousel from "../structure/carousel";
import { Category } from "../../lib/api/categories";

export default function CategoriesCarousel({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <Carousel
      cards={categories.map((category) => (
        <CategoryCard item={category} key={category.categoryId} />
      ))}
    />
  );
}
