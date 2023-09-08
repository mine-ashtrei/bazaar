import { PRODUCTS } from ".";
import ProductCard from "./card";
import Carousel from "../structure/carousel";

export default function ProductCarousel() {
  // TODO: for small screens create a carousel to swipe through
  return (
    <Carousel
      items={PRODUCTS.slice(0, 4)}
      CardComponent={ProductCard}
      title="بائعين متميزين"
    />
  );
}
