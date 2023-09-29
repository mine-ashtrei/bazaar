import { useSession } from "next-auth/react";
import UnauthorizedPage from "../../components/pages/unauthorizedPage";
import Dashboard from "../../components/suppliers/supplierDashboard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import API from "../../lib/api";
import SupplierDashboardLayout from "../../components/layouts/supplierDashboardLayout";
import SupplierRetailers from "../../components/suppliers/dashboard.tsx/retailers";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const retailers = await API.retailers.getAllRetailerData("1");
  return { props: { retailers } };
};

const Page = ({
  retailers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const { data: session, status } = useSession();
  // if (status !== "authenticated") {
  //   return <UnauthorizedPage />;
  // }
  return <SupplierRetailers retailers={retailers} />;
  // return <p>Signed in as {session.user?.email}</p>;
};

Page.layout = SupplierDashboardLayout;
export default Page;
