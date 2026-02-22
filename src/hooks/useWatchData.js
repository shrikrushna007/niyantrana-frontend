import { useEffect, useState } from "react";
import api from "../services/api";

const latestValue = (res) =>
  res.data.data[res.data.data.length - 1].value;

export default function useWatchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [steps, sleep, hr, activity] = await Promise.all([
        api.get("/watch/steps"),
        api.get("/watch/sleep"),
        api.get("/watch/heart-rate"),
        api.get("/watch/activity-summary"),
      ]);

      setData({
        steps: latestValue(steps),
        sleep: latestValue(sleep),
        heartRate: latestValue(hr),
        sedentary: latestValue(activity),
      });

      setLoading(false);
    }

    fetchData().catch(console.error);
  }, []);

  return { data, loading };
}
