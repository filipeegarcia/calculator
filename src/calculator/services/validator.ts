/**
 * Validates if the input is a valid math operation.
 * Tests the received input against some regular expressions.
 * Checks if the input has double consecutive operators, or just numbers, or don't have any operators.
 */
export function isInputInvalid(input: string): boolean {
  const inputWithoutSpaces = input.replace(/\s/g, "");
  const isValidInput = /^[!0-9()+\-%*\/]*\d$/g;
  const hasDoubleOperators = /([+\-%*!])\1+/g;
  const hasOnlyNumbers = /^\d+$/;

  return (
    !isValidInput.test(inputWithoutSpaces) ||
    hasDoubleOperators.test(inputWithoutSpaces) ||
    hasOnlyNumbers.test(inputWithoutSpaces) ||
    inputWithoutSpaces.length === 1 ||
    (inputWithoutSpaces.length === 2 && inputWithoutSpaces[0] === "!")
  );
}
