import { CATEGORIES } from ".";
import CategoryCard from "./card";
import Carousel from "../structure/carousel";

export default function CategoriesCarousel() {
  return (
    <Carousel
      items={CATEGORIES}
      CardComponent={CategoryCard}
      title="تسوق الأحدث"
    />
  );
}
