import { useSession } from "next-auth/react";
import UnauthorizedPage from "../../components/pages/unauthorizedPage";
import Dashboard from "../../components/suppliers/supplierDashboard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import API from "../../lib/api";
import SupplierDashboardLayout from "../../components/layouts/supplierDashboardLayout";
import SupplierOrders from "../../components/suppliers/dashboard.tsx/orders";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ordersData = await API.orders.getOrdersBySupplierId("1");
  return { props: { ordersData } };
};

const Page = ({
  ordersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const { data: session, status } = useSession();
  // if (status !== "authenticated") {
  //   return <UnauthorizedPage />;
  // }
  return <SupplierOrders orders={ordersData} />;
  // return <p>Signed in as {session.user?.email}</p>;
};

Page.layout = SupplierDashboardLayout;
export default Page;
