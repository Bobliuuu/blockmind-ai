import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Header from "~/components/navigation/Header";
import ReduxProvider from "~/components/redux/ReduxProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ReduxProvider>
        <Header />
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
