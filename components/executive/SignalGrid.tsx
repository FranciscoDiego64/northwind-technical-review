import { executiveReadout } from "@/content/executive";

export default function SignalGrid() {
  return (
    <section>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
            What we know
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Current signals & business implications
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
        {executiveReadout.whatWeKnow.items.map((item) => (
          <article
            key={item.area}
            className="bg-white p-6 sm:p-7"
          >
            <p className="text-sm font-semibold">{item.area}</p>

            <p className="mt-4 text-sm leading-6 text-black/65">
              {item.currentSignal}
            </p>

            <div className="mt-6 border-t border-black/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                Business implication
              </p>

              <p className="mt-2 text-sm font-medium leading-6">
                {item.businessImplication}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}