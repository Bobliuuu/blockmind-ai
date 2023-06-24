import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { useRouter } from "next/router";
import Header from "~/components/navigation/Header";
import ReduxProvider from "~/components/redux/ReduxProvider";
import DashboardLayout from "~/components/layouts/DashboardLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <SessionProvider session={session}>
      <ReduxProvider>
        <Header />
        {pathname.includes("dashboard") ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ReduxProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
