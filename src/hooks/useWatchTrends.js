import { useEffect, useState } from "react";
import api from "../services/api";

export default function useWatchTrends() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrends() {
      const [steps, sleep, hr, sedentary] = await Promise.all([
        api.get("/watch/steps"),
        api.get("/watch/sleep"),
        api.get("/watch/heart-rate"),
        api.get("/watch/activity-summary"),
      ]);

      setData({
        steps: steps.data.data,
        sleep: sleep.data.data,
        heartRate: hr.data.data,
        sedentary: sedentary.data.data,
      });

      setLoading(false);
    }

    fetchTrends().catch(console.error);
  }, []);

  return { data, loading };
}
