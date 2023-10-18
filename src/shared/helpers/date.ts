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
