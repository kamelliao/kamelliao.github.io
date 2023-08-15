export default function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <title>{`${title}| Kamel's blog`}</title>
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 max-sm:p-12">
        <div className="z-10 max-w-5xl w-full font-mono text-sm lg:flex-col">
          {children}
        </div>
      </main>
    </>
  );
}
