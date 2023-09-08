import { Category } from ".";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ item }: { item: Category }) {
  return (
    // <Link href={`/path-to-page/${category.name}`}>
    <div className="flex items-start flex-col justify-start">
      <Link href="#" passHref>
        <div className="cursor-pointer hover:opacity-90 transition">
          <Image src={item.imgUrl} width={245} height={309} alt={item.name} />
        </div>
      </Link>
      <div className="prose self-center">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}
