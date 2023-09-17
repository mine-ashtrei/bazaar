import FiveItemGrid from "../structure/fiveItemGrid";
import { Supplier } from "../../lib/suppliers";
import { Product } from "../../lib/products";
import ProductCard from "./card";

export default function FiveProducts({ products }: { products: Product[] }) {
  return (
    <FiveItemGrid
      title="بائعين متميزين"
      href="#"
      items={products.map((product, index) => (
        <ProductCard item={product} key={index} />
      ))}
    ></FiveItemGrid>
  );
}
