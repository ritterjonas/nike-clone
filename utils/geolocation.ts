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

export const isCoordinates = (term: string): boolean => {
  return /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(
    term
  );
};

export const parseCoordinates = (
  term: string
): { lat: number; lng: number } | null => {
  if (!isCoordinates(term)) {
    return null;
  }

  const [lat, lng] = term.split(',');
  return { lat: +lat.trim(), lng: +lng.trim() };
};
