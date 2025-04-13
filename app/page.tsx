"use client";
import { useState } from "react";
import FluidMenu from "@/components/FluidAnimationMenu";

interface Day {
  id: number;
  label: string;
  component?: React.FC;
}

const App = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days: Day[] = [
    { id: 1, label: "Day 1", component: FluidMenu },
    { id: 2, label: "Day 2" },
    { id: 3, label: "Day 3" },
    { id: 4, label: "Day 4" },
    { id: 5, label: "Day 5" },
  ];

  const ActiveComponent = days.find((day) => day.id === activeDay)?.component;

  return (
    <div className="h-screen bg-white relative">
      <div className="fixed top-10 right-30 flex flex-col items-end space-y-2">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            className={`text-gray-500 text-lg font-light hover:text-gray-800 transition-colors ${
              activeDay === day.id ? "text-gray-800 underline" : ""
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      {ActiveComponent ? (
        <ActiveComponent />
      ) : (
        <div className="h-full flex justify-center items-center">
          <p className="text-gray-500 text-4xl font-extralight leading-relaxed">
            Not Yet Announced
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
