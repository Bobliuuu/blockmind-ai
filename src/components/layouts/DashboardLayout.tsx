import DashboardMenu from "../navigation/DashboardMenu";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import Unauthenticated from "../sections/error/unauthenticated";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return (
      <main>
        <DashboardMenu />
        <div className="xl:ml-[300px]">{children}</div>
      </main>
    );
  }
  else {
    return (
      <Unauthenticated />
    )
  }
}
