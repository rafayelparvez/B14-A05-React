import { use, useState } from "react";
import type { Technologiestype } from "../../types/technologyType";
import ChooseTech from "./ChooseTech";
import YourStack from "../stack/YourStack";
import EmptyStack from "../stack/EmptyStack";

interface Techonogyprops {
  technologiesPromise: Promise<Technologiestype[]>;
}

const Technologies = ({ technologiesPromise }: Techonogyprops) => {
  const technologies = use(technologiesPromise);

  const [selectedStack, setSelectedStack] = useState<Technologiestype[]>([]);

  return (
    <div>
      <div className="mx-auto mb-[80px] max-w-7xl px-6">
        {/* Header */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Build your <span className="text-[#4F46E5]">stack</span>, piece by
            piece
          </h1>

          <p className="mt-2 text-slate-500">
            Pick one technology per category — swap anytime as your idea
            changes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Tech Cards */}
          <ChooseTech
            technologies={technologies}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />

          {/* Stack */}
          {selectedStack.length === 0 ? (
            <EmptyStack />
          ) : (
            <YourStack
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
