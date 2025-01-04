export function addNumbers(input: string): number {
  // Return 0 if the input is an empty string
  if (input.trim() === "") return 0;

  // Default delimiters are comma and newline
  let delimiter = /,|\n/; 

  // Check if custom delimiter is specified in the format "//[delimiter]\n"
  if (input.trim().startsWith('//')) {
    // Extract custom delimiter, assuming it is a single character at position 2
    delimiter = new RegExp(input[2]);
    // Remove the custom delimiter declaration from the input string
    input = input.substring(4).trim();
  }

  if (input === "") return 0;

  // Split the input by the delimiter
  const numbers = input.split(delimiter);

  let sum = 0;
  let negatives: string[] = [];

  for (const num of numbers) {
    const trimmedNum = num.trim();
    if (trimmedNum === "") continue; // Skip empty entries

    const parsedNum = parseInt(trimmedNum);
    if (isNaN(parsedNum)) {
      throw new Error("Invalid input: not a number");
    }

    // Check for negative numbers
    if (parsedNum < 0) {
      negatives.push(trimmedNum);
    }

    // Ignore numbers greater than 1000
    if (parsedNum > 1000) {
      continue;
    }

    sum += parsedNum;
  }

  // If there are negative numbers, throw an error with all the negatives
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed:${negatives.join(',')}`);
  }

  return sum;
}