import { OperationResult } from "../types/calculatorTypes";
import { executeMathOperation } from "./orchestrator";

describe("executionClient", () => {
  describe("test executeMathOperation method", () => {
    it("should return 4 for '2+2' input.", () => {
      const expectedResult: OperationResult = {
        number: 4,
      };

      const result = executeMathOperation("2+2", 0);

      expect(result).toEqual(expectedResult);
    });

    it("should return 9 for '*3' input with 3 on the memory.", () => {
      const expectedResult: OperationResult = {
        number: 9,
      };

      const result = executeMathOperation("*3", 3);

      expect(result).toEqual(expectedResult);
    });

    it("should return error for '2+2+' input.", () => {
      const expectedResult: OperationResult = {
        error:
          "Invalid Input. The expected format is:  '4 * 3 + 2' or '4*3+2'. ! and % should be before number: '!10, %10'",
      };

      const result = executeMathOperation("2+2+", 0);

      expect(result).toEqual(expectedResult);
    });
  });
});
