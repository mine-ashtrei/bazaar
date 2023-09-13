import { Category } from "../../lib/categories";

function Category({ category }: { category: Category }) {
  return (
    <a href="#" className="hover:underline">
      {category.name}
    </a>
  );
}

export default function CategoriesHeader({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="bg-secondary mt-1 flex justify-evenly space-x-4">
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}
