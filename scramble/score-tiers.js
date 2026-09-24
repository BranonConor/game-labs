export const SCORE_TIERS = [
  { name: "Undercooked", min: 0, max: 39, id: "undercooked", color: "#a9d2c9" },
  { name: "Over-easy", min: 40, max: 89, id: "over-easy", color: "#f3ca81" },
  { name: "Over-medium", min: 90, max: 139, id: "over-medium", color: "#f0ac79" },
  { name: "Over-hard", min: 140, max: 199, id: "over-hard", color: "#e99283" },
  { name: "Fried", min: 200, max: 279, id: "fried", color: "#ebd782" },
  { name: "Hard-boiled", min: 280, max: null, id: "hard-boiled", color: "#ffe27e" },
];

export function tierForScore(score) {
  return SCORE_TIERS.find((tier) => tier.max === null || score <= tier.max);
}

export function tierRange(tier) {
  return tier.max === null ? `${tier.min}+` : `${tier.min}-${tier.max}`;
}
