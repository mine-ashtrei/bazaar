import { useSession } from "next-auth/react";
import UnauthorizedPage from "../../components/pages/unauthorizedPage";

const Page = () => {
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    return <UnauthorizedPage />;
  }
  return <p>Signed in as {session.user?.email}</p>;
};

export default Page;
