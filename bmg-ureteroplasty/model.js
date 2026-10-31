// Simple model for BMG steps — positions and timings for animation
export const STEPS = [
  { name: 'exposure', t: 0 },
  { name: 'ureterolysis', t: 2 },
  { name: 'harvest', t: 4 },
  { name: 'prep', t: 6 },
  { name: 'onlay', t: 8 },
  { name: 'suture', t: 10 },
  { name: 'closure', t: 12 },
];

export const CYCLE = 14;
export const SLOW = 1.0;

export function stepAt(t) {
  const u = t % CYCLE;
  for (let i = STEPS.length - 1; i >= 0; i--) {
    if (u >= STEPS[i].t) return STEPS[i].name;
  }
  return 'exposure';
}
