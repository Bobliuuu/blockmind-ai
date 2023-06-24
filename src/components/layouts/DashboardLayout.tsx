import DashboardMenu from "../navigation/DashboardMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardMenu />
      <div className="xl:ml-[300px]">{children}</div>
    </main>
  );
}
