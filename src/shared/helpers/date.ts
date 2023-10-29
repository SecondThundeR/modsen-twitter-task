export function getMonthIndex(month: number) {
  if (month < 1) return 0;
  if (month > 12) return 11;
  return month - 1;
}

export function getDaysAmount(month: number, year: number) {
  const monthIndex = getMonthIndex(month);
  const date = new Date(year, monthIndex, 1);
  const days = [];

  while (date.getMonth() === monthIndex) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days.length;
}

export function formatTimeDifference(savedTimestamp: number) {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - Math.floor(savedTimestamp / 1000);

  const second = 1;
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (timeDifference < minute) return Math.floor(timeDifference / second) + "s";
  if (timeDifference < hour) return Math.floor(timeDifference / minute) + "m";
  if (timeDifference < day) return Math.floor(timeDifference / hour) + "h";
  if (timeDifference <= 604800) return Math.floor(timeDifference / day) + "d";

  const date = new Date(savedTimestamp);
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
