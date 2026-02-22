import GaugeChart from "../charts/GaugeChart";

export default function RiskCard({ risk, title = "Overall Risk" }) {
  // If no specific risk provided, show a general summary
  if (!risk) {
    return (
      <div className="card text-center">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">?</span>
          </div>
        </div>
        <h3 className="font-semibold text-secondary-900 mb-2">{title}</h3>
        <p className="text-sm text-secondary-600">
          Connect your health data to see personalized risk insights
        </p>
      </div>
    );
  }

  const score = Math.round(risk.score * 100);

  return (
    <div className="card text-center">
      <GaugeChart value={score} />
      <h3 className="font-semibold text-secondary-900 mt-4 mb-1">{title}</h3>
      <p className="text-sm text-secondary-600">
        Current risk score: {score}
      </p>
      <p className="text-xs text-secondary-500 mt-1">
        Band: {risk.band} | Trend: {risk.trend}
      </p>
    </div>
  );
}
