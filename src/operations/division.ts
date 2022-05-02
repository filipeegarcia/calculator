import { OperationResult } from "../controllers/calculatorController";

export function division(
  firstNumber: number,
  secondNumber: number
): OperationResult {
  return secondNumber === 0
    ? { error: "Invalid Expression. Impossible to divide by zero." }
    : { number: firstNumber / secondNumber };
}

export function defaultDivision(number: number): number {
  return number / 100;
}
