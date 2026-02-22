import { useEffect, useState } from "react";
import api from "../services/api";

function extractSeries(data, key) {
  return data.map((row) => ({
    date: row.date,
    value: row[key],
  }));
}

export default function useLabTrends() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLabs() {
      const [metabolic, liver, anthropometry] = await Promise.all([
        api.get("/lab/metabolic-panel"),
        api.get("/lab/liver-panel"),
        api.get("/lab/anthropometry"),
      ]);

      const metabolicData = metabolic.data.data;
      const liverData = liver.data.data;
      const anthropoData = anthropometry.data.data;

      setData({
        glucose: extractSeries(metabolicData, "glucose"),
        triglycerides: extractSeries(metabolicData, "triglycerides"),
        hdl: extractSeries(metabolicData, "hdl"),

        ggt: extractSeries(liverData, "ggt"),
        ast: extractSeries(liverData, "ast"),
        alt: extractSeries(liverData, "alt"),

        waist: extractSeries(anthropoData, "waist_cm"),
        weight: extractSeries(anthropoData, "weight"),
      });

      setLoading(false);
    }

    fetchLabs().catch(console.error);
  }, []);

  return { data, loading };
}
