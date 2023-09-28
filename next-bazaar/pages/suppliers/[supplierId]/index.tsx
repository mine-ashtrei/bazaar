import API from "../../../lib/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Product } from "../../../lib/api/products";
import ProductPage from "../../../components/products/productPage";
import { Supplier } from "../../../lib/api/suppliers";
import SupplierPage from "../../../components/suppliers/supplierPage";

export const getServerSideProps = (async (context) => {
  const supplierId = context.params!.supplierId;
  if (!supplierId || Array.isArray(supplierId)) {
    console.error("Unexpected array for productId");
    return {
      notFound: true,
    };
  }
  const supplier = await API.suppliers.getById(supplierId);
  if (!supplier) {
    return {
      notFound: true,
    };
  }
  const products = await API.products.getBySupplierId(supplierId);
  if (!products) {
    return {
      notFound: true,
    };
  }
  return { props: { products, supplier } };
}) satisfies GetServerSideProps<{
  products: Product[];
  supplier: Supplier;
}>;

export default function Page({
  products,
  supplier,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <SupplierPage products={products} supplier={supplier} />;
}
