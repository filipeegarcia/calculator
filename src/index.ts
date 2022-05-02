import readline from "readline";
import { calculate } from "./controllers/calculatorController";

/**
 * Attempts to perform the math operation.
 * Logs the error in case of failure.
 */
try {
  initializeCalculator();
} catch (err) {
  console.log("Calculator failed due Error: " + err);
}

/**
 * Reads the input via command line.
 * Logs the operation result on the command line.
 * Exits the program if the user enters "exit".
 */
function initializeCalculator() {
  process.env.IN_MEMORY_NUMBER = "0";

  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Welcome to the Cli Calculator!");
  readLine.setPrompt("> ");
  readLine.prompt();

  readLine.on("line", (operationInput) => {
    if (operationInput === "exit") {
      process.exit();
    }

    const result = calculate(
      operationInput,
      Number(process.env.IN_MEMORY_NUMBER)
    )!;

    process.env.IN_MEMORY_NUMBER = result.toString();
    console.log(result);
    readLine.prompt();
  });
}
