import useRiskSummary from "../../hooks/useRiskSummary";
import Button from "../common/Button";

export default function ConfidenceCard() {
  const { completeness, loading, refresh } = useRiskSummary();

  if (loading || !completeness) {
    return (
      <div className="card">
        <h4 className="font-semibold mb-4 text-secondary-900">
          Data Confidence
        </h4>
        <p className="text-secondary-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-secondary-900">
          Data Confidence
        </h4>
        <Button onClick={refresh} variant="outline" size="sm">
          Refresh
        </Button>
      </div>

      <p className="text-3xl font-semibold mb-1 text-primary-700">
        {completeness.score}%
      </p>

      <p className="text-sm text-secondary-600 mb-3">
        Confidence based on data completeness & consistency
      </p>

      <ul className="text-sm text-secondary-700 space-y-1">
        <li className="flex items-start gap-2">
          <span className="text-primary-500 mt-1">•</span>
          <span>Watch data: {completeness.watch_days} days</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-500 mt-1">•</span>
          <span>Lab reports: {completeness.lab_points} records</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary-500 mt-1">•</span>
          <span>Feature coverage: {completeness.feature_coverage}%</span>
        </li>
      </ul>
    </div>
  );
}
