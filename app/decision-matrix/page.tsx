import { decisionMatrix } from "@/content/decision-matrix";

export default function DecisionMatrixPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="border-b border-black/10 pb-12">
        <p className="text-sm font-medium text-black/45">
          Northwind Supply Co.
        </p>

        <div className="mt-6 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {decisionMatrix.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
            {decisionMatrix.introduction}
          </p>
        </div>
      </section>

      {/* Decision items */}
      <section>
        <div className="space-y-4">
          {decisionMatrix.items.map((item) => (
            <article
              key={item.order}
              className="rounded-2xl border border-black/10 p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[72px_1fr]">
                {/* Order */}
                <div>
                  <div className="text-sm font-semibold text-black/30">
                    {String(item.order).padStart(2, "0")}
                  </div>
                </div>

                <div>
                  {/* Request + priority */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <h2 className="max-w-3xl text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.request}
                    </h2>

                    <span className="w-fit shrink-0 rounded-full border border-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
                      {item.priority}
                    </span>
                  </div>

                  {/* Detail grid */}
                  <div className="mt-8 grid gap-7 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                        TAM action
                      </p>

                      <p className="mt-3 text-sm leading-7 text-black/65">
                        {item.tamAction}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                        Routing
                      </p>

                      <p className="mt-3 text-sm leading-7 text-black/65">
                        {item.routing}
                      </p>
                    </div>
                  </div>

                  {/* Why */}
                  <div className="mt-7 border-t border-black/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                      Why this order
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-black/70">
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Operating principle */}
      <section className="border-t border-black/10 pt-12 pb-8">
        <div className="max-w-4xl rounded-2xl bg-black p-7 text-white sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            {decisionMatrix.operatingPrinciple.title}
          </p>

          <p className="mt-5 text-xl leading-9 tracking-tight sm:text-2xl">
            {decisionMatrix.operatingPrinciple.text}
          </p>
        </div>
      </section>
    </div>
  );
}