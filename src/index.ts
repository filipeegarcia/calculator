import readline from "readline";
import { calculate } from "./controllers/calculatorController";

/**
 * Attempts to execute the calculator.
 * Logs the error in case of failure.
 */
try {
  initializeCalculator();
} catch (err) {
  console.log("Calculator failed due Error: " + err);
}

/**
 * Reads the input via command line.
 * Logs the operation result/error on the command line.
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
    );

    if (result.error) {
      process.env.IN_MEMORY_NUMBER = "0";
      console.log(result.error);
    } else {
      process.env.IN_MEMORY_NUMBER = result.number!.toString();

      console.log(result.number);
    }
    readLine.prompt();
  });
}
