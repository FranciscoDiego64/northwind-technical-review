import { executiveReadout } from "@/content/executive";
import DecisionStrip from "@/components/executive/DecisionStrip";
import ExecutiveHeader from "@/components/executive/ExecutiveHeader";
import PriorityList from "@/components/executive/PriorityList";
import SignalGrid from "@/components/executive/SignalGrid";
import SuccessList from "@/components/executive/SuccessList";

export default function Home() {
  return (
    <div className="space-y-16">
      <ExecutiveHeader />

      <section className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
          {executiveReadout.executivePosition.title}
        </p>

        <p className="mt-5 text-xl leading-6 tracking-[-0.01em] sm:text-xl sm:leading-7">
          {executiveReadout.executivePosition.text}
        </p>
      </section>

      <SignalGrid />

      <PriorityList />

      <DecisionStrip />

      <SuccessList />

      <section className="border-t border-black/10 pt-12 pb-8">
        <div className="max-w-4xl rounded-2xl bg-black p-7 text-white sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            {executiveReadout.executiveFocus.title}
          </p>

          <p className="mt-4 text-lg leading-8 tracking-tight sm:text-xl sm:leading-9">
            {executiveReadout.executiveFocus.text}
          </p>
        </div>
      </section>
    </div>
  );
}