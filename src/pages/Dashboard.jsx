import PageContainer from "../components/layout/PageContainer";
import FocusCard from "../components/cards/FocusCard";
import RiskCard from "../components/cards/RiskCard";
import StatCard from "../components/cards/StatCard";
import MultiRiskCard from "../components/cards/MultiRiskCard";
import CircularStatCard from "../components/cards/CircularStatCard";

import { FaMoon } from "react-icons/fa";

import useWatchData from "../hooks/useWatchData";
import useRiskSummary from "../hooks/useRiskSummary";
import useMultiRiskSummary from "../hooks/useMultiRiskSummary";

import { highestRiskKey } from "../utils/riskUI";
import { useUser } from "@clerk/clerk-react";

// ✅ VALID ICON IMPORTS
import {
  FiActivity,
  FiHeart,
  FiDroplet,
  FiAlertTriangle
} from "react-icons/fi";

import { FaBrain } from "react-icons/fa";

// ✅ ICON MAP (NO INVALID EXPORTS)
const ICON_MAP = {
  metabolic: <FiActivity size={18} />,
  cardio: <FiHeart size={18} />,
  liver: <FiDroplet size={18} />,
  mental: <FaBrain size={18} />,
  alert: <FiAlertTriangle size={18} />
};

export default function Dashboard() {
  const { user } = useUser();
  const watch = useWatchData();
  const risk = useRiskSummary();
  const multiRisk = useMultiRiskSummary();

  let highest = null;
  let highestRiskData = null;

  if (!multiRisk.loading && multiRisk.risks) {
    highest = highestRiskKey(multiRisk.risks);
    highestRiskData = highest ? multiRisk.risks[highest] : null;
  }

  if (watch.loading || risk.loading || multiRisk.loading) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-secondary-600">Loading your health data...</p>
        </div>
      </PageContainer>
    );
  }

  if (!multiRisk.risks) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-secondary-600">No risk data available.</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Good morning, {user?.name?.split(" ")[0] || "User"} 👋
        </h1>
        <p className="text-secondary-600">
          {new Date().toDateString()}
        </p>
      </div>

      <div className="space-y-8">
        <FocusCard />

        <RiskCard
          risk={highestRiskData}
          title={highest ? `${highest.toUpperCase()} Risk Focus` : "Overall Risk"}
        />

        {/* Multi Risk Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-secondary-900">
            Risk Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(multiRisk.risks).map(([key, r]) => (
              <MultiRiskCard
                key={key}
                title={key.toUpperCase()}
                risk={r}
                highlight={key === highest}
              />
            ))}
          </div>
        </div>

        {/* Streak + Level */}
        <div className="grid grid-cols-2 gap-6">
          <div className="card text-center">
            <p className="text-sm text-secondary-600 font-medium">Day Streak</p>
            <p className="text-2xl font-bold mt-2">7</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-secondary-600 font-medium">
              Current Level
            </p>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>
        </div>

        {/* Watch Stats */}
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CircularStatCard
                    label="Steps"
                    value={watch.data.steps}
                    goal={10000}
                    icon={<FiActivity size={16} />}
                />

                <CircularStatCard
                    label="Sleep"
                    value={watch.data.sleep}
                    goal={8}
                    unit="hrs"
                    icon={<FaMoon size={16} />}
                />

                <CircularStatCard
                    label="Resting HR"
                    value={watch.data.heartRate}
                    unit="bpm"
                    icon={<FiHeart size={16} />}
                />
            </div>



        {/* 🔥 BOXED RISK ANALYSIS */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 text-secondary-900">
            Risk Analysis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {risk.explanations.map((text, index) => {
              const t = text.toLowerCase();

              const type =
                t.includes("metabolic")
                  ? "metabolic"
                  : t.includes("cardio")
                  ? "cardio"
                  : t.includes("liver")
                  ? "liver"
                  : t.includes("mental")
                  ? "mental"
                  : "alert";

              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg border border-secondary-200"
                >
                  <div className="mt-1">
                    {ICON_MAP[type]}
                  </div>

                  <p className="text-sm font-medium">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-secondary-500 mt-4">
            This is a preventive risk signal, not a medical diagnosis.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
