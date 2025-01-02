export function addNumbers(input: string): number {
  if (input.trim() === "") return 0;

  // Split the input by commas or new lines
  const numbers = input.split(/[\n,]/);

  let sum = 0;

  for (const num of numbers) {
    const trimmedNum = num.trim();
    if (trimmedNum === "") continue; // Skip empty entries

    const parsedNum = parseInt(trimmedNum);
    if (isNaN(parsedNum)) {
      throw new Error("Invalid input: not a number");
    }
    sum += parsedNum;
  }

  return sum;
}
