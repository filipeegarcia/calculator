# Calculator

This is the Cli Calculator. An interactive command line calculator that maintains the state of the operations between entered lines. The How to Use section provide information about how to use.

## Install and Run

Installing and executing the calculator is pretty simple, go to your terminal and follow the steps below:

-  Clone the solution, i.e: `git clone git@github.com:filipeegarcia/calculator.git`
-  Go to the calculator directory, i.e: `cd calculator/`
-  Install dependencies: `yarn install`
-  Execute the calculator: `yarn start`

## Tests

To run the tests, go to the calculator directory and simply execute: `yarn test`

## Features

This interactive calculator, uses the input received trought the terminal to execute operations and mantain the state. 

Note that for every operation that will be executed, the result will be added to the current number stored on the state, for example:

![image](https://user-images.githubusercontent.com/19864656/166301376-30586314-5b19-465e-a6d1-c768df78035b.png)

On the example above, the first operation is 1+1, then the number 2 will be stored in memory. After that, a multiplication and a division are performed, against the number in memory, returning 3. At the end, if an operation is executed as the last one, 10+10, the result of the operation will be additioned to the number in memory, so 10+10 = 20 + 3 = 23.

So that the calculator does not have limitations regarding the number of operations in a single line, the order of operations is the user's responsibility, therefore, we recommend performing multiplications and divisions first, as on the example below.

![image](https://user-images.githubusercontent.com/19864656/166314111-861be0ab-4ddb-4e58-a93a-9a70bacd5d4b.png)

The calculator will validate the input according to the expected syntax, and will inform the user if the input is invalid.

## How to Use

To use the calculator, follow the instructions below:

You can use the calculator with different inputs, i.e: 
- 1+1
- 1 + 1 
- 10*8/2
- *3
- /2

#### Instructions

- To quit the calculator, just enter exit, anytime.
- To clear the number stored in the calculator memory, enter c.
- To make the number negative, use ! before the number, so !2 will be interpreted as -2, i.e: 2+!2 = 0.  

Math operators:
- Multiplication, use *.
- Division, use /.
- Addition, use +.
- Subtraction, use -.
- Percentage, use %.

If you have any questions, feel free to reach out.
