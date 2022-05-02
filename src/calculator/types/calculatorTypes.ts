/**
 * The final output generated on the operation execution.
 */
export interface OperationResult {
  number?: number;
  error?: string;
}

/**
 * The parsed operation array along with a boolean indicating if the operation starts with a math operator.
 */
export interface ParsedOperation {
  operationArray: (string | number)[];
  startsWithOperator: boolean;
}
