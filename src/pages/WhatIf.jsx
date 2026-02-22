import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import RiskCard from "../components/cards/RiskCard";
import { WHAT_IF_RULES } from "../config/whatIfRules";
import useMultiRiskSummary from "../hooks/useMultiRiskSummary";

export default function WhatIf() {
  const { loading, risks } = useMultiRiskSummary();

  const [selectedRisk, setSelectedRisk] = useState("metabolic");
  const [selectedAction, setSelectedAction] = useState(null);

  if (loading || !risks) {
    return (
      <PageContainer>
        <p className="text-gray-500">Loading baseline risk…</p>
      </PageContainer>
    );
  }

  const baselineRisk = risks[selectedRisk];
  const rule = selectedAction
    ? WHAT_IF_RULES[selectedRisk][selectedAction]
    : null;

  const projectedScores = rule
    ? Object.entries(rule.impact).map(([period, reduction]) => ({
        period,
        score: Math.max(0, baselineRisk.score * (1 - reduction))
      }))
    : [];

  return (
    <PageContainer>
      <h2 className="text-2xl font-semibold mb-6">What-If Simulator</h2>

      {/* Risk Tabs */}
      <div className="flex gap-3 mb-6">
        {Object.keys(risks).map((risk) => (
          <button
            key={risk}
            onClick={() => {
              setSelectedRisk(risk);
              setSelectedAction(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedRisk === risk
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {risk.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="space-y-6">
          <RiskCard risk={baselineRisk} />

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold mb-4">Choose an action</h4>

            <div className="space-y-2">
              {Object.entries(WHAT_IF_RULES[selectedRisk]).map(
                ([key, action]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAction(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg border ${
                      selectedAction === key
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    {action.label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">
          {!rule && (
            <p className="text-gray-500">
              Select an action to see long-term impact.
            </p>
          )}

          {rule && (
            <>
              <h4 className="font-semibold">
                Projected impact if sustained
              </h4>

              {projectedScores.map((p) => (
                <div
                  key={p.period}
                  className="flex justify-between text-sm"
                >
                  <span>
                    After {p.period === "1m"
                      ? "1 month"
                      : p.period === "6m"
                      ? "6 months"
                      : "12 months"}
                  </span>
                  <span className="font-medium">
                    Score → {p.score.toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="mt-4 text-sm text-gray-700">
                Small daily actions may feel subtle, but consistency over
                months can significantly lower your risk.
              </div>
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
