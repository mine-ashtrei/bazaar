import { CategoryProps } from ".";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }: CategoryProps) {
  return (
    // <Link href={`/path-to-page/${category.name}`}>
    <div className="flex items-start flex-col justify-start m-2">
      <Link href="#" passHref>
        <div className="relative cursor-pointer hover:opacity-90 transition">
          <Image
            src={category.imgUrl}
            width={245}
            height={309}
            alt={category.name}
          />
        </div>
      </Link>
      <div className="prose self-center">
        <h3>{category.name}</h3>
      </div>
    </div>
  );
}
