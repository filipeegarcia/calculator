import { OperationResult } from "../types/calculatorTypes";

export function division(
  firstNumber: number | string,
  secondNumber: number | string
): OperationResult {
  return secondNumber === 0
    ? { error: "Invalid Expression. Impossible to divide by zero." }
    : { number: Number(firstNumber) / Number(secondNumber) };
}

export function defaultDivision(number: number | string): number {
  return Number(number) / 100;
}
