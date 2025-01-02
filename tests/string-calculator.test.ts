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

  it("should throw an error for invalid input", () => {
    expect(() => addNumbers("abc")).toThrow("Invalid input: not a number");
  });
  
});
