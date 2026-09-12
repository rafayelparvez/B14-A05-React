import React from "react";
import type { Technologiestype } from "../../types/technologyType";
import { toast } from "react-toastify";

interface TechCardProps {
  technologies: Technologiestype[];
  selectedStack: Technologiestype[];
  setSelectedStack: React.Dispatch<React.SetStateAction<Technologiestype[]>>;
}

const TechCard = ({
  technologies,
  selectedStack,
  setSelectedStack,
}: TechCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {
        const isSelected = selectedStack.some(
          (item) => item.id === technology.id,
        );

        return (
          <div
            key={technology.id}
            className={`flex flex-col rounded-2xl border bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md ${
              isSelected
                ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/10"
                : "border-slate-200 hover:border-[#C7D2FE]"
            }`}
          >
            {/* Logo & Badge */}
            <div className="mb-4 flex items-start justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isSelected ? "bg-[#EEF2FF]" : "bg-slate-50"
                }`}
              >
                <img
                  src={technology.logo}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />
              </div>

              <span className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-xs font-medium text-[#4F46E5]">
                {technology.badge}
              </span>
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-slate-900">
              {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
              {technology.description}
            </p>

            {/* Meta */}
            <div className="mb-4 mt-4 flex items-center gap-3 text-xs">
              <span className="rounded-md bg-cyan-50 px-2 py-1 font-medium text-cyan-700">
                {technology.category}
              </span>

              <span className="text-slate-400">{technology.level}</span>

              <span className="ml-auto flex items-center gap-1 text-slate-400">
                <span className="text-amber-500">&#9733;</span>
                {technology.rating}
              </span>
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => {
                const alreadySelected = selectedStack.some(
                  (item) => item.id === technology.id,
                );

                if (alreadySelected) {
                  toast.warning(`${technology.name} is already in your stack!`);
                  return;
                }

                setSelectedStack((current) => [...current, technology]);

                toast.success(`${technology.name} added to your stack!`);
              }}
              className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-[#EEF2FF] text-[#4F46E5]"
                  : "bg-[#4F46E5] text-white hover:bg-[#4338CA]"
              }`}
            >
              {isSelected ? "✓ Added to Stack" : "Add to stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TechCard;
