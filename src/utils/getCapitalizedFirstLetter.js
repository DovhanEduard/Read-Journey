export function getCapitalizedFirstLetter(str) {
  const trimmed = str.trim();
  if (!trimmed) return '';
  return trimmed[0].toUpperCase();
}
