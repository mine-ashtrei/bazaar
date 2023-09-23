import API from "../../../lib";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Product } from "../../../lib/products";
import ProductPage from "../../../components/products/productPage";
import { Supplier } from "../../../lib/suppliers";

export const getServerSideProps = (async (context) => {
  const productId = context.params!.productId;
  if (!productId || Array.isArray(productId)) {
    console.error("Unexpected array for productId");
    return {
      notFound: true,
    };
  }
  const product = await API.products.getById(productId);
  if (!product) {
    return {
      notFound: true,
    };
  }
  const supplier = await API.suppliers.getById(product.supplierId);
  if (!supplier) {
    return {
      notFound: true,
    };
  }
  return { props: { product, supplier } };
}) satisfies GetServerSideProps<{
  product: Product;
  supplier: Supplier;
}>;

export default function Page({
  product,
  supplier,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ProductPage product={product} supplier={supplier} />;
}
