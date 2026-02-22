// frontend/src/config/whatIfRules.js

export const WHAT_IF_RULES = {
  metabolic: {
    increase_steps: {
      label: "Increase physical activity",
      impact: { "1m": 0.06, "6m": 0.22, "12m": 0.38 }
    },
    reduce_waist: {
      label: "Reduce waist circumference",
      impact: { "1m": 0.12, "6m": 0.40, "12m": 0.60 }
    }
  },

  cardio: {
    manage_stress: {
      label: "Reduce stress",
      impact: { "1m": 0.08, "6m": 0.28, "12m": 0.45 }
    },
    increase_steps: {
      label: "Increase physical activity",
      impact: { "1m": 0.04, "6m": 0.18, "12m": 0.30 }
    }
  },

  liver: {
    reduce_alcohol: {
      label: "Reduce alcohol intake",
      impact: { "1m": 0.10, "6m": 0.34, "12m": 0.54 }
    },
    improve_diet: {
      label: "Improve diet quality",
      impact: { "1m": 0.06, "6m": 0.24, "12m": 0.42 }
    }
  },

  mental: {
    improve_sleep: {
      label: "Improve sleep quality",
      impact: { "1m": 0.14, "6m": 0.44, "12m": 0.64 }
    },
    reduce_stress: {
      label: "Reduce stress",
      impact: { "1m": 0.10, "6m": 0.32, "12m": 0.50 }
    }
  }
};
