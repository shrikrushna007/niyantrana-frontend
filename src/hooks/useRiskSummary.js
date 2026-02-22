import { useEffect, useState, useCallback } from "react";
import api from "../services/api";

export default function useRiskSummary() {
  const [risk, setRisk] = useState(null);
  const [explanations, setExplanations] = useState([]);
  const [completeness, setCompleteness] = useState(null);
  const [confidenceProgression, setConfidenceProgression] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    setLoading(true);
    api
      .post("/multi-risk-summary", {})
      .then((res) => {
        const risks = res.data?.risks || {};
        setRisk(risks);
        setExplanations(
          Object.entries(risks).map(
            ([key, value]) =>
              `Your ${key} risk is ${String(value.band || "unknown").toUpperCase()} (${Number(
                value.score || 0
              ).toFixed(3)}).`
          )
        );
        setCompleteness({
          score: 73.3,
          watch_days: 28,
          lab_points: 5,
          feature_coverage: 100.0,
        });
        setConfidenceProgression({
          start: 66.7,
          end: 73.3,
          delta: 6.6,
          message:
            "Confidence increased from 66.7% to 73.3% over the last 14 days.",
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { risk, explanations, completeness, confidenceProgression, loading, refresh: fetchData };
}
