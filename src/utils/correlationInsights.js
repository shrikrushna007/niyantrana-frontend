function trendDirection(series) {
  if (!series || series.length < 2) return "stable";
  const delta = series[series.length - 1].value - series[0].value;
  if (delta > 0) return "up";
  if (delta < 0) return "down";
  return "stable";
}

export function generateInsights({ watch, labs, risks }) {
  const insights = [];

  // Metabolic
  if (
    trendDirection(labs.glucose) === "up" &&
    trendDirection(labs.waist) === "up"
  ) {
    insights.push(
      "Rising glucose and waist circumference suggest increasing metabolic risk."
    );
  }

  // Liver
  if (trendDirection(labs.ggt) === "up") {
    insights.push(
      "Elevated GGT trend indicates increasing liver stress."
    );
  }

  // Cardio
  if (
    trendDirection(watch.sleep) === "down" &&
    trendDirection(watch.heartRate) === "up"
  ) {
    insights.push(
      "Reduced sleep combined with rising resting heart rate may increase cardio stress."
    );
  }

  // Activity
  if (trendDirection(watch.steps) === "down") {
    insights.push(
      "Declining physical activity has been observed over recent days."
    );
  }

  return insights;
}
