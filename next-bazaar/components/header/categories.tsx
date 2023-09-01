const CATEGORIES = [
  "Men",
  "Women",
  "Home & Decor",
  "Beauty & Wellness",
  "Jewelry",
];

type CategoryProps = {
  name: string;
};

function Category({ name }: CategoryProps) {
  return (
    <a href="#" className="hover:underline">
      {name}
    </a>
  );
}

export default function Categories() {
  return (
    <div className="bg-secondary mt-1 flex justify-evenly space-x-4">
      {CATEGORIES.map((category) => (
        <Category key={category} name={category} />
      ))}
    </div>
  );
}
