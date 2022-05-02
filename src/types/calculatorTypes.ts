export interface OperationResult {
  number?: number;
  error?: string;
}

export interface ParsedOperation {
  operationArray: (string | number)[];
  startsWithOperator: boolean;
}
