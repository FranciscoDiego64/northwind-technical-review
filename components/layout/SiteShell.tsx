import Header from "./Header";
import Navigation from "./Navigation";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        {children}
      </main>
    </div>
  );
}