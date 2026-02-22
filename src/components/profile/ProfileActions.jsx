import generateHealthReport from "../../utils/generateHealthReport";
import useMultiRiskSummary from "../../hooks/useMultiRiskSummary";
import useWatchData from "../../hooks/useWatchData";
import useWatchTrends from "../../hooks/useWatchTrends";
import useLabData from "../../hooks/useLabData";

export default function ProfileActions() {
  const { risks } = useMultiRiskSummary();
  const watch = useWatchData();
  const { data: watchTrends, loading: watchTrendsLoading } = useWatchTrends();
  const { data: labs, loading: labsLoading } = useLabData();

  const handleDownload = () => {
    if (!risks || !watchTrends || !labs) return;

    generateHealthReport({
      user: { name: "Demo User" },
      risks,
      confidence: 61.9,
      watchData: watchTrends,
      labData: labs,
    });
  };

  return (
    <div className="card">
      <h4 className="font-semibold mb-4 text-secondary-900">Account Actions</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={handleDownload}
          disabled={!risks || !watchTrends || !labs || watchTrendsLoading || labsLoading}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {watchTrendsLoading || labsLoading ? "Loading..." : "Download Health Report (PDF)"}
        </button>

        <button className="btn-secondary">
          Export Data
        </button>
      </div>
    </div>
  );
}
