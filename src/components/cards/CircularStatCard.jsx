import React from "react";

const RADIUS = 45;
const STROKE = 6;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function CircularStatCard({
  label,
  value,
  goal,
  unit = "",
  icon
}) {
  const percent = goal
    ? Math.min((value / goal) * 100, 100)
    : 100;

  const offset =
    CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <div className="card flex flex-col items-center justify-center text-center">
      <p className="text-sm text-secondary-600 mb-3">{label}</p>

      <div className="relative w-24 h-24">
        {/* Background ring */}
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="48"
            cy="48"
            r={RADIUS}
            strokeWidth={STROKE}
            fill="none"
            className="stroke-secondary-200"
          />
          {/* Progress ring */}
          <circle
            cx="48"
            cy="48"
            r={RADIUS}
            strokeWidth={STROKE}
            fill="none"
            strokeLinecap="round"
            className="stroke-primary-500"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {icon && <div className="mb-1">{icon}</div>}
          <p className="text-sm font-semibold">
            {value}
            {goal ? ` / ${goal}` : ""}
          </p>
        </div>
      </div>

      {unit && (
        <p className="text-xs text-secondary-500 mt-2">
          {unit}
        </p>
      )}
    </div>
  );
}
