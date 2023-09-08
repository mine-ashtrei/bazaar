type CarouselProps<T> = {
  items: T[];
  CardComponent: React.ComponentType<{ item: T }>;
  title: string;
};

export default function Carousel<T>({
  items,
  CardComponent,
  title,
}: CarouselProps<T>) {
  return (
    <div className="m-8">
      <div className="prose mb-2">
        <h3>{title}</h3>
      </div>
      <div className="flex flex-row justify-evenly gap-8">
        {items.map((item, index) => (
          <CardComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
