import Image from "next/image";
import Link from "next/link";

export default function IconButton({
  src,
  href,
}: {
  src: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <Image src={src} width={24} height={24} alt="icon" />
    </Link>
  );
}
