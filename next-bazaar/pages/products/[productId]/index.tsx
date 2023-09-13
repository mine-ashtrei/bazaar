import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return <div>My Post: {router.query.productId}</div>;
}
