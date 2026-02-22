import { useEffect, useState } from "react";
import api from "../services/api";

export default function useRiskTrends() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.post("/multi-risk-summary").then((res) => {
      const today = res.data.risks;

      // simulate 7-day trend
      const dates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d.toISOString().slice(0, 10);
      });

      const trend = dates.map((date, i) => ({
        date,
        metabolic: today.metabolic.score - (6 - i) * 0.01,
        cardio: today.cardio.score - (6 - i) * 0.015,
        liver: today.liver.score - (6 - i) * 0.008,
        mental: today.mental.score - (6 - i) * 0.005,
      }));

      setData(trend);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
