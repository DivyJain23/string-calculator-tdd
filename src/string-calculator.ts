export function addNumbers(input: string): number {
  if (input.trim() === "") return 0;

  // Split the input by commas
  const numbers = input.split(",");

  // Handle up to two numbers using index
  const num1 = numbers[0] ? parseInt(numbers[0].trim()) : 0;
  const num2 = numbers[1] ? parseInt(numbers[1].trim()) : 0;

  // Validate numbers
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input: not a number");
  }

  // Sum the numbers and return
  return num1 + num2;
}
