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
  return <div>{name}</div>;
}

export default function Categories() {
  return (
    <div className="bg-transparent mt-1 flex justify-evenly bg-accentTertiary space-x-4">
      {CATEGORIES.map((category) => (
        <Category key={category} name={category} />
      ))}
    </div>
  );
}
