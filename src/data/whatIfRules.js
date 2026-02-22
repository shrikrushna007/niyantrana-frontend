export const WHAT_IF_RULES = [
  {
    risk: "metabolic",
    band: "high",
    action: "increase_steps",
    response: {
      current_risk: {
        band: "high",
        score: 0.75,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "moderate",
        new_score: 0.5,
        impact: "positive",
      },
      summary_message:
        "Increasing daily steps by around 2,000 could reduce your metabolic risk from HIGH to MODERATE.",
    },
  },

  {
    risk: "metabolic",
    band: "moderate",
    action: "reduce_waist",
    response: {
      current_risk: {
        band: "moderate",
        score: 0.5,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "low",
        new_score: 0.25,
        impact: "positive",
      },
      summary_message:
        "Reducing waist circumference could lower your metabolic risk from MODERATE to LOW.",
    },
  },

  {
    risk: "cardio",
    band: "high",
    action: "manage_stress",
    response: {
      current_risk: {
        band: "high",
        score: 0.75,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "moderate",
        new_score: 0.5,
        impact: "positive",
      },
      summary_message:
        "Managing stress could reduce your cardiovascular risk from HIGH to MODERATE.",
    },
  },

  {
    risk: "cardio",
    band: "moderate",
    action: "increase_steps",
    response: {
      current_risk: {
        band: "moderate",
        score: 0.5,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "low",
        new_score: 0.25,
        impact: "positive",
      },
      summary_message:
        "Increasing physical activity could reduce your cardiovascular risk to LOW.",
    },
  },

  {
    risk: "liver",
    band: "critical",
    action: "reduce_alcohol",
    response: {
      current_risk: {
        band: "critical",
        score: 0.9,
        confidence: "medium",
        trend: "increasing",
      },
      what_if: {
        after: "high",
        new_score: 0.75,
        impact: "positive",
      },
      summary_message:
        "Reducing alcohol intake could lower your liver risk from CRITICAL to HIGH.",
    },
  },

  {
    risk: "liver",
    band: "high",
    action: "improve_diet",
    response: {
      current_risk: {
        band: "high",
        score: 0.75,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "moderate",
        new_score: 0.5,
        impact: "positive",
      },
      summary_message:
        "Improving diet quality could reduce your liver risk from HIGH to MODERATE.",
    },
  },

  {
    risk: "mental",
    band: "high",
    action: "improve_sleep",
    response: {
      current_risk: {
        band: "high",
        score: 0.75,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "moderate",
        new_score: 0.5,
        impact: "positive",
      },
      summary_message:
        "Improving sleep duration could reduce your mental health risk from HIGH to MODERATE.",
    },
  },

  {
    risk: "mental",
    band: "moderate",
    action: "reduce_stress",
    response: {
      current_risk: {
        band: "moderate",
        score: 0.5,
        confidence: "medium",
        trend: "stable",
      },
      what_if: {
        after: "low",
        new_score: 0.25,
        impact: "positive",
      },
      summary_message:
        "Reducing stress could lower your mental health risk from MODERATE to LOW.",
    },
  },
];
