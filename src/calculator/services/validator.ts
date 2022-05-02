/**
 * Validates if the input is a valid math operation.
 * Tests the received input against some regular expressions.
 * Checks if the input has double consecutive operators, or just numbers, or don't have any operators.
 */
export function isInputInvalid(input: string): boolean {
  const isValidInput = /^[!0-9()+\-%*\/]*\d$/g;
  const hasDoubleOperators = /([+\-%*!])\1+/g;
  const hasOnlyNumbers = /^\d+$/;

  return (
    !isValidInput.test(input) ||
    hasDoubleOperators.test(input) ||
    hasOnlyNumbers.test(input) ||
    input.length === 1 ||
    (input.length === 2 && input[0] === "!")
  );
}
