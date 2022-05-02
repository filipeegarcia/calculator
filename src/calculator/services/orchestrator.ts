import { OperationResult } from "../types/calculatorTypes";
import { getOperationResult } from "./executionClient";
import { getParsedOperation } from "./parser";
import { isInputInvalid } from "./validator";

/**
 * Orchestrates all the necessary calls to validate the input
 * and calculate the operation.
 */
export function executeMathOperation(
  input: string,
  inMemoryNumber: number
): OperationResult {
  const inputWithoutSpaces = input.replace(/\s/g, "");

  if (input === "c") {
    inMemoryNumber = 0;
    return { number: inMemoryNumber };
  }

  if (isInputInvalid(inputWithoutSpaces)) {
    return {
      error:
        "Invalid Input. The expected format is:  '4 * 3 + 2' or '4*3+2'. ! and % should be before number: '!10, %10'",
    };
  }

  const parsedOperation = getParsedOperation(inputWithoutSpaces);

  return getOperationResult(
    inMemoryNumber,
    parsedOperation.operationArray,
    parsedOperation.startsWithOperator
  );
}
