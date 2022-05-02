import { ParsedOperation } from "../types/calculatorTypes";

/**
 * Parses the operation into an array with the numbers and operators divided to facilitate the execution.
 */
export function getParsedOperation(operation: string): ParsedOperation {
  const validOperatorsandSymbols = /[!%+*-\/^()]/;
  let operationArray = [];
  let i = 0;

  while (i < operation.length) {
    const character = operation[i];
    if (validOperatorsandSymbols.test(character)) {
      operationArray.push(character);
      i++;
    } else {
      const nextOperator = operation
        .substring(i)
        .search(validOperatorsandSymbols);
      const finalIndex =
        nextOperator > -1 ? i + nextOperator : operation.length;
      const number = parseInt(operation.substring(i, finalIndex));
      operationArray.push(number);
      i = finalIndex;
    }
  }

  return getParsedObject(operationArray, "!");
}

/**
 * Returns the parsed object containing the final array, along with the information if the operation starts with an operator.
 * Parses the minus symbol represented as "!" to be along with its number on the array.
 */
function getParsedObject(
  operationArray: (string | number)[],
  minusRepresentation: string
): ParsedOperation {
  const operatorsRegex = /[%+*-\/^()]/;

  for (let i = 0; i < operationArray.length; i++) {
    if (operationArray[i] === minusRepresentation) {
      operationArray[i + 1] = -operationArray[i + 1];
      operationArray.splice(i, 1);
    }
  }

  const startsWithOperator = operatorsRegex.test(operationArray[0].toString());

  return { operationArray, startsWithOperator };
}
