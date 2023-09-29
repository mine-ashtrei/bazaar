import { useSession } from "next-auth/react";
import UnauthorizedPage from "../../components/pages/unauthorizedPage";
import Dashboard from "../../components/suppliers/supplierDashboard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import API from "../../lib/api";
import SupplierDashboardLayout from "../../components/layouts/supplierDashboardLayout";
import SupplierHome from "../../components/suppliers/dashboard.tsx/home";

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
  return <SupplierHome orders={ordersData} />;
  // return <p>Signed in as {session.user?.email}</p>;
};

Page.layout = SupplierDashboardLayout;
export default Page;
