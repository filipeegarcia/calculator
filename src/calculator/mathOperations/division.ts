import { OperationResult } from "../types/calculatorTypes";

/**
 * Returns the division of two numbers.
 * Returns and error in case of the second number is a 0.
 */
export function division(
  firstNumber: number | string,
  secondNumber: number | string
): OperationResult {
  return secondNumber === 0
    ? { error: "Invalid Expression. Impossible to divide by zero." }
    : { number: Number(firstNumber) / Number(secondNumber) };
}

/**
 * Returns the division of a number per 100.
 */
export function defaultDivision(number: number | string): number {
  return Number(number) / 100;
}
