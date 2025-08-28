export function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) {
    if (hours === 1) {
      return `${hours} hour ${minutes}`;
    }
    return `${hours} hours ${minutes}`;
  } else {
    return `${minutes}`;
  }
}
