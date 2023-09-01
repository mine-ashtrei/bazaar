import { CATEGORIES } from ".";
import CategoryCard from "./card";

export default function CategoriesCarousel() {
  // TODO: for small screens create a carousel to swipe through
  return (
    <div className="m-8">
      <div className="prose mb-2">
        <h3>Shop The Latest</h3>
      </div>
      <div className="flex flex-row justify-evenly ">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
