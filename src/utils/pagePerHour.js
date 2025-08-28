export function pagesPerHour(pagesRead, seconds) {
  if (seconds === 0) {
    return pagesRead;
  }
  return (pagesRead / seconds) * 3600;
}
