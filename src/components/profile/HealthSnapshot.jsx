import useMultiRiskSummary from "../../hooks/useMultiRiskSummary";

export default function HealthSnapshot() {
  const { risks, loading } = useMultiRiskSummary();

  if (loading || !risks) {
    return (
      <div className="card text-secondary-600">
        Loading health snapshot…
      </div>
    );
  }

  return (
    <div className="card">
      <h4 className="font-semibold mb-4 text-secondary-900">Health Snapshot</h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(risks).map(([key, r]) => (
          <div
            key={key}
            className="border border-secondary-200 rounded-lg p-3 text-center hover:bg-secondary-50 transition-colors duration-200"
          >
            <p className="text-xs uppercase text-secondary-600 font-medium">
              {key}
            </p>
            <p className="text-lg font-semibold text-primary-700">
              {(r.score * 100).toFixed(0)}
            </p>
            <p className="text-xs text-secondary-500">
              {r.band}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
