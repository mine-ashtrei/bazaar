import { CATEGORIES, CategoryProps } from ".";

function Category({ category }: CategoryProps) {
  return (
    <a href="#" className="hover:underline">
      {category.name}
    </a>
  );
}

export default function CategoriesHeader() {
  return (
    <div className="bg-secondary mt-1 flex justify-evenly space-x-4">
      {CATEGORIES.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}
