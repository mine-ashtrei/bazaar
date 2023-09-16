import CategoryCard from "./card";
import FiveItemGrid from "../structure/fiveItemGrid";
import { Category } from "../../lib/categories";

export default function FiveCategories({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <FiveItemGrid
      title="بائعين متميزين"
      href="#"
      items={categories.map((category, index) => (
        <CategoryCard item={category} key={index} />
      ))}
    ></FiveItemGrid>
  );
}
