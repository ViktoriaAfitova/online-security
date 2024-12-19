export const getDuration = (seconds: number): string => {
  const hoursInSeconds = 3600;
  const dayInSeconds = 86400;

  if (seconds < dayInSeconds) {
    const hours = Math.floor(seconds / hoursInSeconds);
    return `${hours} ${getHour(hours)}`;
  } else {
    const days = Math.floor(seconds / dayInSeconds);
    return `${days} ${getDay(days)}`;
  }
}

const getHour = (hours: number): string => {
  if (hours === 1) return 'час';
  if (hours >= 2 && hours <= 4) return 'часа';
  return 'часов';
}

const getDay = (days: number): string => {
  if (days === 1) return 'день';
  if (days >= 2 && days <= 4) return 'дня';
  return 'дней';
}