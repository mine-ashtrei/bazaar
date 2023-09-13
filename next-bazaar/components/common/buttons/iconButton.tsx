import Image from "next/image";
import Link from "next/link";

export default function IconButton({
  src,
  href,
  onClick,
}: {
  src: string;
  href?: string;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <Link href={href}>
        <Image src={src} width={24} height={24} alt="icon" />
      </Link>
    );
  }
  return (
    <button onClick={onClick}>
      <Image src={src} width={24} height={24} alt="icon" />
    </button>
  );
}
