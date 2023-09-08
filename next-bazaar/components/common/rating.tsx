import Star from "./icons/start";

export default function Rating({ value }: { value: number }) {
  value = Math.floor(value);
  return (
    <div className="flex flex-row w-36">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={i < value ? "fill-primary" : "fill-none"} />
      ))}
    </div>
  );
}
