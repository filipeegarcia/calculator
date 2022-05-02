import { addition } from "../mathOperations/addition";
import { defaultDivision, division } from "../mathOperations/division";
import { multiplication } from "../mathOperations/multiplication";
import { subtraction } from "../mathOperations/subtraction";
import { OperationResult } from "../types/calculatorTypes";

/**
 * Iterates through the received operation to execute all the math operations needed.
 * Returns an error in case the result received is not a number.
 */
export function getOperationResult(
  inMemoryNumber: number,
  operation: (string | number)[],
  startsWithOperator: boolean
): OperationResult {
  let divisionResult: OperationResult;
  let firstExecution = true;

  for (let i = 0; i < operation.length; i++) {
    switch (operation[i].toString()) {
      case "+":
        if (!firstExecution) {
          inMemoryNumber = addition(inMemoryNumber, operation[i + 1]);
        } else {
          !startsWithOperator
            ? (inMemoryNumber =
                inMemoryNumber + addition(operation[i - 1], operation[i + 1]))
            : (inMemoryNumber = addition(inMemoryNumber, operation[i + 1]));

          firstExecution = false;
        }
        break;

      case "-":
        if (!firstExecution) {
          inMemoryNumber = subtraction(inMemoryNumber, operation[i + 1]);
        } else {
          !startsWithOperator
            ? (inMemoryNumber =
                inMemoryNumber +
                subtraction(operation[i - 1], operation[i + 1]))
            : (inMemoryNumber = subtraction(inMemoryNumber, operation[i + 1]));
          firstExecution = false;
        }
        break;

      case "*":
        if (!firstExecution) {
          inMemoryNumber = multiplication(inMemoryNumber, operation[i + 1]);
        } else {
          !startsWithOperator
            ? (inMemoryNumber =
                inMemoryNumber +
                multiplication(operation[i - 1], operation[i + 1]))
            : (inMemoryNumber = multiplication(
                inMemoryNumber,
                operation[i + 1]
              ));
          firstExecution = false;
        }
        break;

      case "/":
        if (!firstExecution) {
          divisionResult = division(inMemoryNumber, operation[i + 1]);
          inMemoryNumber = divisionResult.number!;
        } else if (!startsWithOperator) {
          divisionResult = division(operation[i - 1], operation[i + 1]);
          inMemoryNumber = inMemoryNumber + divisionResult.number!;
          firstExecution = false;
        } else {
          divisionResult = division(inMemoryNumber, operation[i + 1]);
          inMemoryNumber = divisionResult.number!;
          firstExecution = false;
        }

        if (divisionResult.error) {
          return { error: divisionResult.error };
        }
        break;

      case "%":
        inMemoryNumber = defaultDivision(operation[i + 1]);
        break;
    }
  }

  return !isNaN(inMemoryNumber)
    ? { number: inMemoryNumber }
    : {
        error:
          "Error: Unable to execute operation. Read the docs to get more info.",
      };
}
