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
});
