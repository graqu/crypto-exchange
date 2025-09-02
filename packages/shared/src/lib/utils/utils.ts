export function convertToken(
  amount: number,
  rate: number | undefined = 4
): number {
  return amount * rate;
}
