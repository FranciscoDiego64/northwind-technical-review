import { executiveReadout } from "@/content/executive";

export default function PriorityList() {
  return (
    <section className="border-t border-black/10 pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
        {executiveReadout.priorities.title}
      </p>

      <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
        {executiveReadout.priorities.items.map((item) => (
          <article
            key={item.number}
            className="grid gap-5 py-7 sm:grid-cols-[72px_1fr]"
          >
            <div className="text-sm font-semibold text-black/30">
              {String(item.number).padStart(2, "0")}
            </div>

            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-black/65">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}