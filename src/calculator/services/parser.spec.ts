import { ParsedOperation } from "../types/calculatorTypes";
import { getParsedOperation } from "./parser";

describe("parser", () => {
  describe("test getParsedOperation method", () => {
    it("should return [1, " + ", 1] an false for 1+1 input.", () => {
      const result = getParsedOperation("1+1");

      const expectedOutput: ParsedOperation = {
        operationArray: [1, "+", 1],
        startsWithOperator: false,
      };

      expect(result).toEqual(expectedOutput);
    });

    it("should return ['*', 3] and true for *3 input.", () => {
      const result = getParsedOperation("*3");

      const expectedOutput: ParsedOperation = {
        operationArray: ["*", 3],
        startsWithOperator: true,
      };

      expect(result).toEqual(expectedOutput);
    });

    it("should return [2, " + " ,-2] and false for 2+!2 input.", () => {
      const result = getParsedOperation("2+!2");

      const expectedOutput: ParsedOperation = {
        operationArray: [2, "+", -2],
        startsWithOperator: false,
      };

      expect(result).toEqual(expectedOutput);
    });
  });
});
