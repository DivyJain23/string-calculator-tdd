export function addNumbers(input: string): number {
  // Return 0 if the input is an empty string
  if (input.trim() === "") return 0;

  // Default delimiters are comma and newline
  let delimiter = /,|\n/; 

  // Check if custom delimiter is specified in the format "//[delimiter]\n"
  if (input.trim().startsWith('//')) {
    // Extract custom delimiter, assuming it is a single character at position 2
    delimiter = new RegExp(input[2])
    // Remove the custom delimiter declaration from the input string
    input = input.substring(4).trim();
  }

  if (input === "") return 0;

  // Split the input by commas or new lines
  const numbers = input.split(delimiter);

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
