import { executiveReadout } from "@/content/executive";

export default function ExecutiveHeader() {
  return (
    <section className="border-b border-black/10 pb-12">
      <p className="text-sm font-medium text-black/45">
        Northwind Supply Co.
      </p>

      <div className="mt-6 max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          {executiveReadout.title}
        </h1>

        <p className="mt-4 text-xl text-black/45">
          {executiveReadout.subtitle}
        </p>
      </div>
    </section>
  );
}