import { OperationResult, ParsedOperation } from "../types/calculatorTypes";
import { getOperationResult } from "./executionClient";

describe("executionClient", () => {
  describe("test getOperationResult method", () => {
    it("should return 2 for  [1, " + ", 1] input.", () => {
      const parsedOperation: ParsedOperation = {
        operationArray: [1, "+", 1],
        startsWithOperator: false,
      };

      const expectedResult: OperationResult = {
        number: 2,
      };

      const result = getOperationResult(
        0,
        parsedOperation.operationArray,
        parsedOperation.startsWithOperator
      );

      expect(result).toEqual(expectedResult);
    });

    it("should return error for  [12, '/', 0] input.", () => {
      const parsedOperation: ParsedOperation = {
        operationArray: [12, "/", 0],
        startsWithOperator: true,
      };

      const expectedResult: OperationResult = {
        error: "Invalid Expression. Impossible to divide by zero.",
      };

      const result = getOperationResult(
        0,
        parsedOperation.operationArray,
        parsedOperation.startsWithOperator
      );

      expect(result).toEqual(expectedResult);
    });

    it("should return 145 for ['-', 8, '+', 12] input, when InMemoryNumber = 141.", () => {
      const parsedOperation: ParsedOperation = {
        operationArray: ["-", 8, "+", 12],
        startsWithOperator: true,
      };

      const expectedResult: OperationResult = {
        number: 145,
      };

      const result = getOperationResult(
        141,
        parsedOperation.operationArray,
        parsedOperation.startsWithOperator
      );

      expect(result).toEqual(expectedResult);
    });

    it("should return 0.9 for  ['%', 90] input.", () => {
      const parsedOperation: ParsedOperation = {
        operationArray: ["%", 90],
        startsWithOperator: true,
      };

      const expectedResult: OperationResult = {
        number: 0.9,
      };

      const result = getOperationResult(
        0,
        parsedOperation.operationArray,
        parsedOperation.startsWithOperator
      );

      expect(result).toEqual(expectedResult);
    });
  });
});
