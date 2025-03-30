import inquirer from "inquirer";
while (true) {
    const ask = await inquirer.prompt([
        {
            message: "Enter your first number",
            type: "number",
            name: "firstNumber"
        },
        {
            message: "Enter your second number",
            type: "number",
            name: "secondNumber"
        },
        {
            message: "Select operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "End Program"],
        }
    ]);
    if (ask.operator === "Addition") {
        console.log(`Addition: ${ask.firstNumber} + ${ask.secondNumber} = ${ask.firstNumber + ask.secondNumber}`);
        break;
    }
    else if (ask.operator === "Subtraction") {
        console.log(`Subtraction: ${ask.firstNumber} - ${ask.secondNumber} = ${ask.firstNumber - ask.secondNumber}`);
        break;
    }
    else if (ask.operator === "Multiplication") {
        console.log(`Multiplication: ${ask.firstNumber} * ${ask.secondNumber} = ${ask.firstNumber * ask.secondNumber}`);
        break;
    }
    else if (ask.operator === "Division") {
        console.log(`Division: ${ask.firstNumber} / ${ask.secondNumber} = ${ask.firstNumber / ask.secondNumber}`);
        break;
    }
    else if (ask.operator === "Percentage") {
        console.log(`Percentage: (${ask.firstNumber} / 100) * ${ask.secondNumber} = ${(ask.firstNumber / 100) * ask.secondNumber}`);
        break;
    }
    else if (ask.operator === "End Program") {
        break;
    }
    else {
        console.log("Invalid operator selected ");
    }
}
