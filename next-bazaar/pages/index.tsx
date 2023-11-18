import StoreFront from "../components/pages/storeFront";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import API from "../lib/api";
import STRAPI from "../lib/strapi";
import { useCategories } from "../components/categories/categoriesContext";
import { Supplier } from "../lib/api/suppliers";
import { Product, products } from "../lib/api/products";
import { StoreFrontData } from "../lib/strapi/pages";

export const getStaticProps = (async () => {
  const suppliers = await API.suppliers.getAll();
  const products = await API.products.getAll();
  const storeFront = await STRAPI.pages.getSoreFrontPage();
  return { props: { suppliers, products, storeFront } };
}) satisfies GetStaticProps<{
  suppliers: Supplier[];
  products: Product[];
  storeFront: StoreFrontData;
}>;

export default function Home({
  suppliers,
  products,
  storeFront,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const categoriesContext = useCategories();
  return (
    <StoreFront
      categories={categoriesContext.categories}
      suppliers={suppliers}
      products={products}
      storeFront={storeFront}
    />
  );
}

/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
<Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>
</div> */
