import ProductCard from "./card";
import Carousel from "../structure/carousel";
import { Product } from "../../lib/products";

export default function ProductCarousel({ products }: { products: Product[] }) {
  // TODO: for small screens create a carousel to swipe through
  return (
    <Carousel
      items={products}
      CardComponent={ProductCard}
      title="بائعين متميزين"
    />
  );
}
