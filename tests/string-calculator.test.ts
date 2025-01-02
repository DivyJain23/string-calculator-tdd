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
});
