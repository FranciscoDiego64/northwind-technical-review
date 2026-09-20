import { executiveReadout } from "@/content/executive";

export default function SuccessList() {
  return (
    <section className="border-t border-black/10 pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
        {executiveReadout.success.title}
      </p>

      <div className="mt-6 max-w-3xl divide-y divide-black/10 border-y border-black/10">
        {executiveReadout.success.items.map((item) => (
          <div
            key={item}
            className="flex gap-4 py-5"
          >
            <span
              aria-hidden="true"
              className="mt-1 text-sm font-semibold"
            >
              ✓
            </span>

            <p className="leading-7 text-black/70">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}