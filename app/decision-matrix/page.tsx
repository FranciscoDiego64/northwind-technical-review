import { decisionMatrix } from "@/content/decision-matrix";

export default function DecisionMatrixPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-medium text-black/50">
          Northwind Supply Co.
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          {decisionMatrix.title}
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-black/60">
          {decisionMatrix.introduction}
        </p>
      </section>

      <section className="space-y-4">
        {decisionMatrix.items.map((item) => (
          <article
            key={item.order}
            className="rounded-xl border border-black/10 p-6"
          >
            <div className="flex gap-5">
              <div className="text-sm font-semibold text-black/40">
                {String(item.order).padStart(2, "0")}
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-semibold">{item.request}</h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-black/40">
                      Priority
                    </div>
                    <p className="mt-2 text-sm leading-6">{item.priority}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-black/40">
                      TAM action
                    </div>
                    <p className="mt-2 text-sm leading-6">
                      {item.tamAction}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-black/40">
                      Routing
                    </div>
                    <p className="mt-2 text-sm leading-6">{item.routing}</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-black/10 pt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-black/40">
                    Why
                  </div>
                  <p className="mt-2 text-sm leading-6">{item.why}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-3xl border-t border-black/10 pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-black/50">
          {decisionMatrix.operatingPrinciple.title}
        </h2>

        <p className="mt-4 text-lg leading-8">
          {decisionMatrix.operatingPrinciple.text}
        </p>
      </section>
    </div>
  );
}