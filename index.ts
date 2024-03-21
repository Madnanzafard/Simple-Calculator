#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter your First number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {message: "Enter your operator", type: "list", name: "operator", 
     choices: ["Addition", "Subtraction", "Multiplication", "Divison" ]}
]);

// Conditional statement 

if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
} else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}else if (answer.operator === "Divison"){
    console.log(answer.firstNumber / answer.secondNumber)
} else {
    console.log("Please select the correct operator")
}
console.log('THE END');
