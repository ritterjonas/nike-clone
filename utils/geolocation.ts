export const getDistance = (
  xa: number,
  ya: number,
  xb: number,
  yb: number
): number => {
  const dx = xb - xa;
  const dy = yb - ya;

  const d = Math.sqrt(dx * dx + dy * dy);
  const dKm = d * 100;

  return dKm;
};
