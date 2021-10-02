export function DateFromNow(days = 1): string {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + days);
  return futureDate.toISOString();
}
export function SubtractDaysFromNow(days = 1): string {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() - days);
  return futureDate.toISOString();
}
export function AddHoursToDate(h: number, date: Date): string {
  date.setHours(date.getHours() + h);
  return date.toISOString();
}

export function CurrentDate() {
  return new Date().toISOString();
}
export function CurrentWeekNumber(): number {
  const now = new Date();
  const onejan = new Date(now.getFullYear(), 0, 1);
  return Math.floor(
    ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7,
  );
}
export function CurrentYearNumber(): number {
  return new Date().getFullYear();
}
export function CurrentMonthNumber(): number {
  return new Date().getMonth() + 1;
}
export function CurrentDayNumber(): number {
  return new Date().getDate();
}
export function ConvertDate(date: Date): string {
  return date.toISOString();
}
export function DateCheck(date: string) {
  const dateObject = new Date(date);
  const currentDate = new Date();
  return dateObject.getTime() > currentDate.getTime();
}
