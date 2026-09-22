import { accountPlan } from "@/content/account-plan";

export default function AccountPlanPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-black/10 pb-12">
        <p className="text-sm font-medium text-black/45">
          Northwind Supply Co.
        </p>

        <div className="mt-6 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {accountPlan.title}
          </h1>

          <p className="mt-4 text-xl text-black/45">
            {accountPlan.subtitle}
          </p>
        </div>
      </section>

      {/* Sidebar + content */}
      <div className="mt-12 lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start lg:gap-12">
        {/* Side navigation */}
        <aside className="sticky top-8 hidden self-start lg:block">
        <nav aria-label="Account plan sections">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              On this page
            </p>

            <ul className="mt-4 space-y-3 border-l border-black/10 pl-4">
              <li>
                <a
                  href="#objectives"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  Objectives
                </a>
              </li>

              <li>
                <a
                  href="#priorities"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  Priorities
                </a>
              </li>

              <li>
                <a
                  href="#workstreams"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  Workstreams
                </a>
              </li>

              <li>
                <a
                  href="#first-30-days"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  First 30 Days
                </a>
              </li>

              <li>
                <a
                  href="#operating-model"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  Operating Model
                </a>
              </li>

              <li>
                <a
                  href="#30-day-outcome"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  30-Day Outcome
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0 space-y-16">
          {/* Account objectives */}
          <section id="objectives" className="max-w-4xl scroll-mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              {accountPlan.accountObjectives.title}
            </p>

            <p className="mt-5 text-xl leading-9">
              {accountPlan.accountObjectives.intro}
            </p>

            <ul className="mt-6 space-y-4">
              {accountPlan.accountObjectives.objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex gap-4 text-base leading-7 text-black/70"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                  />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-black pl-5 text-base leading-7 text-black/65">
              {accountPlan.accountObjectives.closing}
            </p>
          </section>

          {/* Priorities */}
          <section
            id="priorities"
            className="scroll-mt-8 border-t border-black/10 pt-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              {accountPlan.priorities.title}
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
              {accountPlan.priorities.items.map((item) => (
                <article
                  key={item.priority}
                  className="border-b border-black/10 p-6 last:border-b-0 sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[72px_1fr]">
                    <div className="text-sm font-semibold text-black/30">
                      {String(item.priority).padStart(2, "0")}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">
                        {item.businessGoal}
                      </h2>

                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                            Work
                          </p>
                          <p className="mt-2 text-sm leading-6 text-black/65">
                            {item.work}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                            Dependencies
                          </p>
                          <p className="mt-2 text-sm leading-6 text-black/65">
                            {item.dependencies}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                            Impact if unmet
                          </p>
                          <p className="mt-2 text-sm leading-6 text-black/65">
                            {item.impactIfUnmet}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                            Expected return
                          </p>
                          <p className="mt-2 text-sm leading-6 text-black/65">
                            {item.expectedReturn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 max-w-4xl rounded-xl bg-black/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                Sequencing
              </p>

              <p className="mt-3 text-sm leading-7 text-black/65">
                {accountPlan.priorities.sequencing}
              </p>
            </div>
          </section>

          {/* Workstreams */}
          <section
            id="workstreams"
            className="scroll-mt-8 border-t border-black/10 pt-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              Account workstreams
            </p>

            <div className="mt-8 space-y-6">
              {accountPlan.workstreams.map((workstream) => (
                <article
                  key={workstream.number}
                  className="rounded-2xl border border-black/10 p-6 sm:p-8"
                >
                  <div className="flex gap-5">
                    <div className="shrink-0 text-sm font-semibold text-black/30">
                      {String(workstream.number).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {workstream.title}
                      </h2>

                      {/* Current state */}
                      <div className="mt-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                          {workstream.currentStateTitle}
                        </p>

                        <p className="mt-3 max-w-4xl whitespace-pre-line text-base leading-7 text-black/70">
                          {workstream.currentState}
                        </p>
                      </div>

                      {/* Actions with standard list */}
                      {"actions" in workstream && workstream.actions && (
                        <div className="mt-8">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                            Actions
                          </p>

                          <ul className="mt-4 space-y-3">
                            {workstream.actions.map((action) => (
                              <li
                                key={action}
                                className="flex gap-3 text-sm leading-6 text-black/65"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                                />
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Actions with intro + baseline */}
                      {"actionsIntro" in workstream &&
                        workstream.actionsIntro && (
                          <div className="mt-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                              Actions
                            </p>

                            <p className="mt-3 text-sm leading-6 text-black/65">
                              {workstream.actionsIntro}
                            </p>

                            {workstream.actionsLead && (
                              <p className="mt-3 text-lg font-semibold tracking-tight">
                                {workstream.actionsLead}
                              </p>
                            )}

                            {workstream.baseline && (
                              <ul className="mt-5 space-y-3">
                                {workstream.baseline.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-3 text-sm leading-6 text-black/65"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {workstream.actionsClosing && (
                              <p className="mt-5 text-sm leading-6 text-black/65">
                                {workstream.actionsClosing}
                              </p>
                            )}
                          </div>
                        )}

                      {/* Dependencies / impact */}
                      <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                            Dependencies
                          </p>

                          <p className="mt-2 text-sm leading-6 text-black/65">
                            {workstream.dependencies}
                          </p>
                        </div>

                        {workstream.impactIfUnmet && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                              Impact if unmet
                            </p>

                            <p className="mt-2 text-sm leading-6 text-black/65">
                              {workstream.impactIfUnmet}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Success measures */}
                      <div className="mt-8 border-t border-black/10 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
                          Success measures
                        </p>

                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {workstream.successMeasures.map((measure) => (
                            <li
                              key={measure}
                              className="flex gap-3 text-sm leading-6 text-black/65"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 text-sm font-semibold"
                              >
                                ✓
                              </span>

                              <span>{measure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* First 30 days */}
          <section
            id="first-30-days"
            className="scroll-mt-8 border-t border-black/10 pt-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              {accountPlan.first30Days.title}
            </p>

            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
              {accountPlan.first30Days.weeks.map((week) => (
                <article key={week.title} className="bg-white p-6 sm:p-7">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {week.title}
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {week.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-black/65"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Operating model */}
          <section
            id="operating-model"
            className="scroll-mt-8 border-t border-black/10 pt-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              {accountPlan.operatingModel.title}
            </p>

            <p className="mt-5 max-w-3xl text-xl leading-8">
              {accountPlan.operatingModel.intro}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {accountPlan.operatingModel.cadence.map((cadence) => (
                <article
                  key={cadence.title}
                  className="rounded-xl border border-black/10 p-6"
                >
                  <h2 className="text-lg font-semibold">{cadence.title}</h2>

                  {"items" in cadence && cadence.items && (
                    <ul className="mt-5 space-y-3">
                      {cadence.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-black/65"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {"text" in cadence && cadence.text && (
                    <p className="mt-4 text-sm leading-6 text-black/65">
                      {cadence.text}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* 30-day outcome */}
          <section
  id="30-day-outcome"
  className="scroll-mt-8 border-t border-black/10 pt-12"
>
  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
    {accountPlan.thirtyDayOutcome.title}
  </p>

  <p className="mt-5 text-lg font-medium leading-8">
    {accountPlan.thirtyDayOutcome.intro}
  </p>

  <div className="mt-6 max-w-3xl divide-y divide-black/10 border-y border-black/10">
    {accountPlan.thirtyDayOutcome.items.map((item) => (
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

  <div className="mt-10 max-w-4xl rounded-xl bg-black p-7 text-white sm:p-9">
    <p className="text-lg leading-8 tracking-tight sm:text-l sm:leading-9">
      {accountPlan.thirtyDayOutcome.closing}
    </p>
  </div>
</section>
        </div>
      </div>
    </div>
  );
}