import { executiveReadout } from "@/content/executive";

export default function DecisionStrip() {
  return (
    <section className="border-t border-black/10 pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
        {executiveReadout.decisions.title}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {executiveReadout.decisions.items.map((item) => {
          const [label, ...rest] = item.split(":");

          return (
            <div
              key={item}
              className="rounded-xl border border-black/10 p-6"
            >
              <p className="text-sm font-semibold">{label}</p>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {rest.join(":").trim()}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}