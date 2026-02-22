import { WHAT_IF_IMPACT } from "../data/whatIfImpactMap";
import { scoreToBand, clampScore } from "./riskBandUtils";

export function runWhatIf({
  risk_type,
  current_risk,
  action,
}) {
  const impact =
    WHAT_IF_IMPACT[risk_type]?.[action] ?? 0;

  const newScore = clampScore(
    current_risk.score - impact
  );

  const newBand = scoreToBand(newScore);

  return {
    current_risk,
    what_if: {
      after: newBand,
      new_score: Number(newScore.toFixed(2)),
      impact: impact > 0 ? "positive" : "neutral",
    },
    summary_message: buildMessage(
      risk_type,
      current_risk.band,
      newBand,
      action,
      impact
    ),
  };
}

function buildMessage(
  risk,
  before,
  after,
  action,
  impact
) {
  if (impact === 0 || before === after) {
    return `This action has limited impact on your ${risk} risk at the moment.`;
  }

  return `By ${action.replace(
    "_",
    " "
  )}, your ${risk} risk could improve from ${before.toUpperCase()} to ${after.toUpperCase()}.`;
}
