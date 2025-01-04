import { addNumbers } from "../src/string-calculator";

describe("addNumbers function", () => {
  it("should return 0 for an empty string", () => {
    expect(addNumbers("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(addNumbers("1")).toBe(1);
  });

  it("should handle spaces around the number", () => {
    expect(addNumbers(" 1 ")).toBe(1);
  });

  it("should throw an error when the input is not a valid number", () => {
    expect(() => addNumbers("abc")).toThrow("Invalid input: not a number");
  });

  it("should return the 0 if string only contains comma and not the numbers", () => {
    expect(addNumbers(",")).toBe(0);
  });
  
  it("should return the sum of two comma-separated numbers", () => {
    expect(addNumbers("1,2")).toBe(3);
    expect(addNumbers("10,20")).toBe(30);
    expect(addNumbers(" 1 , 2 ")).toBe(3);
    expect(addNumbers(" 1,")).toBe(1);
  });

  it("should throw an error for comma-separated characters", () => {
    expect(() => addNumbers("1,a")).toThrow("Invalid input: not a number");
    expect(() => addNumbers("x,y")).toThrow("Invalid input: not a number");
    expect(() => addNumbers("1, b, cc, 6")).toThrow("Invalid input: not a number");
  });

  it("should handle an unknown amount of numbers", () => {
    expect(addNumbers("1,2,3")).toBe(6);
    expect(addNumbers("4,5,6,7")).toBe(22);
    expect(addNumbers("10,20,30,40,50")).toBe(150);
    expect(addNumbers("10,20, 30 ,40, 50 ")).toBe(150);
  });

  it("should handle new lines between numbers", () => {
    expect(addNumbers("1\n2,3")).toBe(6);
    expect(addNumbers("1\n2\n3")).toBe(6);
  });

  it("should handle leading/trailing spaces with new lines", () => {
    expect(addNumbers("  1 \n 2 \n 3 ")).toBe(6);
    expect(addNumbers("  1\n  2 \n  3")).toBe(6);
    expect(addNumbers("\n  1 ,2  \n")).toBe(3);
  });

  it("should throw an error for new lines separated characters", () => {
    expect(() => addNumbers("1\na")).toThrow("Invalid input: not a number");
    expect(() => addNumbers("x\ny")).toThrow("Invalid input: not a number");
    expect(() => addNumbers("1\n b\n cc\n 6")).toThrow("Invalid input: not a number");
  });

  it("should return 0 for only new lines", () => {
    expect(addNumbers("\n\n")).toBe(0);
  });

  it("should handle both commas and new lines as delimiters", () => {
    expect(addNumbers("1,2\n3")).toBe(6);
    expect(addNumbers("1\n2,3")).toBe(6);
  });

  it("should handle multiple new lines between numbers", () => {
    expect(addNumbers("1\n\n2\n\n3")).toBe(6);
    expect(addNumbers("\n1\n2\n\n3\n")).toBe(6);
  });

  it("should return 0 for an empty string with custom delimiter", () => {
    expect(addNumbers("//;\n")).toBe(0);
  });

  it("should handle spaces around numbers with custom delimiter", () => {
    expect(addNumbers("//;\n 1 ")).toBe(1);
  });

  it("should return 0 if the string only contains a custom delimiter and not numbers", () => {
    expect(addNumbers("//;\n ;")).toBe(0);
  });  

  it("should handle custom delimiters", () => {
    expect(addNumbers("//;\n1")).toBe(1);
    expect(addNumbers("//;\n1;2")).toBe(3);
    expect(addNumbers("//;\n1;2;4")).toBe(7);
  });

  it("should throw an error for invalid characters with custom delimiter", () => {
    expect(() => addNumbers("//;\nx;y")).toThrow("Invalid input: not a number");
    expect(() => addNumbers("//;\nx;y;z")).toThrow("Invalid input: not a number");
    expect(() => addNumbers("//;\nx;2;4")).toThrow("Invalid input: not a number");
  });

  it("should throw 'Negatives not allowed' for a single negative number in the string", () => {
    expect(() => addNumbers("1,-2,3")).toThrow("Negatives not allowed:-2");
  });

  it("should throw 'Negatives not allowed' for multiple negative numbers in the string", () => {
    expect(() => addNumbers("1,-2,-3")).toThrow("Negatives not allowed:-2,-3");
    expect(() => addNumbers("-1,-2,-3")).toThrow("Negatives not allowed:-1,-2,-3");
  });

  it("should throw 'Negatives not allowed' for multiple negative numbers with custom delimiter", () => {
    expect(() => addNumbers("//;\n1;-2;-3")).toThrow("Negatives not allowed:-2,-3");
    expect(() => addNumbers("//;\n-1;-2;-3")).toThrow("Negatives not allowed:-1,-2,-3");
  });

  it("should ignore numbers greater than 1000", () => {
    expect(addNumbers("2,1001")).toBe(2);          
    expect(addNumbers("1000,1001,2")).toBe(1002);   
    expect(addNumbers("1000,1001,500,1001")).toBe(1500);
    expect(addNumbers("1000,2000,500")).toBe(1500);  
    expect(addNumbers("1001")).toBe(0);              
    expect(addNumbers("1000")).toBe(1000);           
  });

  it("should handle multi-character delimiters", () => {
    expect(addNumbers("//[***]\n1***2***3")).toBe(6);
    expect(addNumbers("//[sep]\n1sep2sep3")).toBe(6);
    expect(addNumbers("//[@@@]\n5@@@10@@@15")).toBe(30);
  });

  it("should throw 'Negatives not allowed' for multiple negative numbers with multi-character delimiters", () => {
    expect(() => addNumbers("//[***]\n1***2***-3")).toThrow("Negatives not allowed:-3");
  });
  
});
