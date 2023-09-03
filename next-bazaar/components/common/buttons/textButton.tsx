import Link from "next/link";

export default function TextButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="hover:underline">{text}</div>
    </Link>
  );
}
