import { useSession } from "next-auth/react";
import UnauthorizedPage from "../../components/pages/unauthorizedPage";
import Dashboard from "../../components/suppliers/dashboard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import API from "../../lib/api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ordersData = await API.orders.getOrdersBySupplierId("1");
  return { props: { ordersData } };
};

export default function Page({
  ordersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const { data: session, status } = useSession();
  // if (status !== "authenticated") {
  //   return <UnauthorizedPage />;
  // }
  return <Dashboard orders={ordersData} />;
  // return <p>Signed in as {session.user?.email}</p>;
}
