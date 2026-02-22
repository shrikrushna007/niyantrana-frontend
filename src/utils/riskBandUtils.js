export function scoreToBand(score) {
  if (score < 0.3) return "low";
  if (score < 0.6) return "moderate";
  if (score < 0.8) return "high";
  return "critical";
}

export function clampScore(score) {
  return Math.min(0.95, Math.max(0.05, score));
}
