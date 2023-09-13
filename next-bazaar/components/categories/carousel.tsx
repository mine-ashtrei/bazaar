import CategoryCard from "./card";
import Carousel from "../structure/carousel";
import { Category } from "../../lib/categories";

export default function CategoriesCarousel({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <Carousel
      items={categories}
      CardComponent={CategoryCard}
      title="تسوق الأحدث"
    />
  );
}
