import PageContainer from "../components/layout/PageContainer";
import TrendLineChart from "../components/charts/TrendLineChart";
import useWatchTrends from "../hooks/useWatchTrends";
import useRiskTrends from "../hooks/useRiskTrends";
import useLabTrends from "../hooks/useLabTrends";
import { generateInsights } from "../utils/correlationInsights";

export default function Trends() {
  const watch = useWatchTrends();
  const risk = useRiskTrends();
  const labs = useLabTrends();

  if (watch.loading || risk.loading || labs.loading) {
    return (
      <PageContainer>
        <p className="text-gray-500">Loading trends...</p>
      </PageContainer>
    );
  }

  const insights = generateInsights({
    watch: watch.data,
    labs: labs.data,
    risks: risk.data,
  });

  return (
    <PageContainer>
      <h2 className="text-2xl font-semibold mb-6">
        Trends & Insights
      </h2>

      {/* Risk trajectories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TrendLineChart
          title="Metabolic Risk Trajectory"
          data={risk.data}
          dataKey="metabolic"
          color="#7c3aed" // purple
        />

        <TrendLineChart
          title="Cardio Risk Trajectory"
          data={risk.data}
          dataKey="cardio"
          color="#dc2626" // red
        />

        <TrendLineChart
          title="Liver Risk Trajectory"
          data={risk.data}
          dataKey="liver"
          color="#f59e0b" // amber
        />

        <TrendLineChart
          title="Mental Health Risk Trajectory"
          data={risk.data}
          dataKey="mental"
          color="#2563eb" // blue
        />
      </div>


      {/* Watch trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <TrendLineChart
          title="Steps"
          data={watch.data.steps}
          dataKey="value"
          unit="steps"
        />
        <TrendLineChart
          title="Sleep Duration"
          data={watch.data.sleep}
          dataKey="value"
          unit="hours"
        />
        <TrendLineChart
          title="Resting Heart Rate"
          data={watch.data.heartRate}
          dataKey="value"
          unit="bpm"
        />
        <TrendLineChart
          title="Sedentary Time"
          data={watch.data.sedentary}
          dataKey="value"
          unit="minutes"
        />
      </div>

      {/* Lab trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <TrendLineChart
          title="Fasting Glucose"
          data={labs.data.glucose}
          dataKey="value"
          unit="mg/dL"
        />
        <TrendLineChart
          title="Triglycerides"
          data={labs.data.triglycerides}
          dataKey="value"
          unit="mg/dL"
        />
        <TrendLineChart
          title="GGT (Liver)"
          data={labs.data.ggt}
          dataKey="value"
          unit="U/L"
        />
        <TrendLineChart
          title="Waist Circumference"
          data={labs.data.waist}
          dataKey="value"
          unit="cm"
        />
      </div>

      {/* Insights */}
      <div className="mt-10 bg-white rounded-xl shadow p-5">
        <h4 className="font-semibold mb-3">
          Correlation Insights
        </h4>

        {insights.length === 0 ? (
          <p className="text-sm text-gray-500">
            No strong patterns detected yet. Continue tracking.
          </p>
        ) : (
          <ul className="text-sm text-gray-700 space-y-1">
            {insights.map((i, idx) => (
              <li key={idx}>• {i}</li>
            ))}
          </ul>
        )}
      </div>
    </PageContainer>
  );
}
