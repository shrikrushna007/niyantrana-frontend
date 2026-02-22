import { useEffect, useState } from "react";
import api from "../services/api";

export default function useMultiRiskSummary() {
  const [risks, setRisks] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .post("/multi-risk-summary", {})
      .then((res) => {
        setRisks(res.data?.risks || null);
        setMessage(res.data?.summary_message || "");
      })
      .catch(() => {
        setRisks(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    risks,
    message,
    loading,
  };
}
