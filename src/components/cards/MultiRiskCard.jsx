import { riskColor } from "../../utils/riskUI";
import StaticSparkline from "../charts/StaticSparkline";

export default function MultiRiskCard({ title, risk, highlight }) {
  if (!risk) {
    return (
      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-400">
        No data
      </div>
    );
  }

  const colors = riskColor(risk.band);

  return (
    <div
      className={`
        rounded-xl p-4 shadow-sm border transition
        ${colors.bg} ${colors.border}
        ${highlight ? "ring-2 ring-red-400 shadow-md" : ""}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h4 className="font-semibold text-gray-800">{title}</h4>

        {/* 🔹 Decorative sparkline */}
        <div className="text-gray-400 -mb-1">
          <StaticSparkline />
        </div>
      </div>

      {/* Score */}
      <div className={`mt-3 text-3xl font-bold ${colors.text}`}>
        {(risk.score * 100).toFixed(0)}
      </div>

      {/* Meta */}
      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <div>
          Band: <span className="font-medium">{risk.band}</span>
        </div>
        <div>
          Trend: {risk.trend}
        </div>
        <div>
          Confidence: {risk.confidence}
        </div>
      </div>
    </div>
  );
}
