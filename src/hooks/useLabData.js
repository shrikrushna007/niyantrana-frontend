import { useEffect, useState } from "react";
import api from "../services/api";

export default function useLabData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLabs() {
      try {
        const [metabolic, liver, anthropometry] = await Promise.all([
          api.get("/lab/metabolic-panel"),
          api.get("/lab/liver-panel"),
          api.get("/lab/anthropometry"),
        ]);

        setData({
          metabolic: metabolic.data.data,
          liver: liver.data.data,
          anthropometry: anthropometry.data.data,
        });
      } catch (error) {
        console.error("Error fetching lab data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLabs();
  }, []);

  return { data, loading };
}
