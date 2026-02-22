export function riskColor(band) {
  switch (band) {
    case "low":
      return {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-300",
      };
    case "moderate":
      return {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-300",
      };
    case "high":
      return {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-300",
      };
    case "critical":
      return {
        bg: "bg-red-100",
        text: "text-red-800",
        border: "border-red-500",
      };
    default:
      return {
        bg: "bg-gray-50",
        text: "text-gray-700",
        border: "border-gray-200",
      };
  }
}

export function highestRiskKey(risks) {
  if (!risks || typeof risks !== "object") return null;

  const entries = Object.entries(risks);
  if (entries.length === 0) return null;

  return entries.sort(
    (a, b) => b[1].score - a[1].score
  )[0][0];
}

