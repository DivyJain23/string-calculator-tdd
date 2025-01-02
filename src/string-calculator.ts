export function addNumbers(input: string): number {
  if (input.trim() === "") return 0;

  // Trim spaces and parse the number
  const num = parseInt(input.trim());
  
  // Check if the parsed value is a valid number
  if (isNaN(num)) {
    throw new Error("Invalid input: not a number");
  }

  return num;
}
