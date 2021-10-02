export function RandomNumberGenerator(length = 5): string {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export function Approximates(floatNumber: number): number {
  return Number(floatNumber.toFixed(2));
}
