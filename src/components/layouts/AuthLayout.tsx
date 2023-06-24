export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-38 mx-5 mb-28 xl:mt-40 2xl:mb-40">
      <div className="mx-auto max-w-[420px] text-center">{children}</div>
    </div>
  );
}
