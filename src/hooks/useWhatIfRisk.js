import { useState } from "react";
import api from "../services/api";

export default function useWhatIfRisk() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const simulate = (inputs) => {
    setLoading(true);

    let action = "improve_sleep";

    if (inputs.steps > 9000) action = "increase_steps";
    if (inputs.waist < 85) action = "reduce_waist";

    api
      .post("/risk-with-what-if", {
        current_band: "high",
        action,
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch(() => {
        setResult(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    simulate,
    result,
    loading,
  };
}
