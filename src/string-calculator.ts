export function addNumbers(input: string): number {
  if (input === "") return 0;

  // Handle the case where the input is a single number
  return parseInt(input);
}
