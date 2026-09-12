import React from "react";
import TechCard from "./TechCard";
import type { Technologiestype } from "../../types/technologyType";

interface ChooseTechProps {
  technologies: Technologiestype[];
  selectedStack: Technologiestype[];
  setSelectedStack: React.Dispatch<React.SetStateAction<Technologiestype[]>>;
}

const ChooseTech = ({
  technologies,
  selectedStack,
  setSelectedStack,
}: ChooseTechProps) => {
  return (
    <div>
      <TechCard
        technologies={technologies}
        selectedStack={selectedStack}
        setSelectedStack={setSelectedStack}
      />
    </div>
  );
};

export default ChooseTech;
