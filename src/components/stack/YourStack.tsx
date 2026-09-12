import React from "react";
import type { Technologiestype } from "../../types/technologyType";
import { toast } from "react-toastify";

interface YourStackProps {
  selectedStack: Technologiestype[];
  setSelectedStack: React.Dispatch<React.SetStateAction<Technologiestype[]>>;
}

const YourStack = ({ selectedStack, setSelectedStack }: YourStackProps) => {
  return (
    <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-20">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Your stack</h2>
      <p className="mb-4 text-sm text-slate-400">
        {selectedStack.length}{" "}
        {selectedStack.length === 1 ? "technology" : "technologies"} selected
      </p>
      {/* Selected Technologies */}
      <div className="mb-4 flex flex-col gap-2">
        {selectedStack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5"
          >
            {/* Logo */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
              <img
                src={technology.logo}
                alt={technology.name}
                className="h-6 w-6 object-contain"
              />
            </div>

            {/* Name */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900">
                {technology.name}
              </p>

              <p className="text-xs text-slate-400">{technology.category}</p>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => {
                setSelectedStack((currentStack) =>
                  currentStack.filter((item) => item.id !== technology.id),
                );
                toast.error(`${technology.name} removed from your stack!`);
              }}
              aria-label={`Remove ${technology.name}`}
              className="px-1 text-lg leading-none text-slate-300 transition-colors hover:text-red-500"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Remove All */}
      <button
        type="button"
        onClick={() => {
          setSelectedStack([]);
          toast.error("All technologies removed!");
        }}
        className="w-full rounded-xl border border-rose-200 py-2.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
      >
        Remove all
      </button>
    </div>
  );
};

export default YourStack;
