import { accountPlan } from "@/content/account-plan";

export default function AccountPlanPage() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl">
        <p className="mb-3 text-sm font-medium text-black/50">
          Northwind Supply Co.
        </p>

        <h1 className="text-4xl font-semibold tracking-tight">
          {accountPlan.title}
        </h1>

        <p className="mt-3 text-lg text-black/50">
          {accountPlan.subtitle}
        </p>
      </section>

      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold">
          {accountPlan.accountObjectives.title}
        </h2>

        <p className="mt-4 whitespace-pre-line leading-7">
          {accountPlan.accountObjectives.intro}
        </p>

        <ul className="mt-6 space-y-3">
          {accountPlan.accountObjectives.objectives.map((objective) => (
            <li key={objective} className="flex gap-3 leading-7">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}