import ProductCard from "./card";
import Carousel from "../structure/carousel";
import { Product } from "../../lib/products";

export default function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <Carousel
      cards={products.map((product) => (
        <ProductCard item={product} key={product.id} />
      ))}
    />
  );
}
