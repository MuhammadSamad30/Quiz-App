#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log();
console.log(chalk.greenBright("                        Welcome To The Quiz App From Muhammad Samad"));
console.log();

let questions: {
  quiz_1: string;
  quiz_2: string;
  quiz_3: string;
  quiz_4: string;
  quiz_5: string;
} = await inquirer.prompt([
    {
        name: "quiz_1",
        type: "list",
        message: chalk.greenBright("What is TypeScript?"),
        choices: ["A. A programming language for building iOS apps",
                  "B. A superset of JavaScript that adds static typing",  //b
                  "C. A database management system",
                  "D. A version control system"]                      
    },                                                       
    {
        name: "quiz_2",
        type: "list",
        message: chalk.greenBright("Which of the following is a correct way to declare a variable with a specific type in TypeScript?"),
        choices: ["A. let count: number = 5", //a
                  "B. var count: integer = 5",
                  "C. int count = 5",
                  "D. count = 5 : number"]
    },
    {
        name: "quiz_3",
        type: "list",
        message: chalk.greenBright("Which of the following is a benefit of using TypeScript over JavaScript?"),
        choices: ["A. Faster execution speed",
                  "B. Built-in support for JSON",
                  "C. Static type checking",  //c
                  "D. Better compatibility with HTML"]
    },
    {
        name: "quiz_4",
        type: "list",
        message: chalk.greenBright("How do you compile TypeScript code to JavaScript?"),
        choices: ["A. By using the Tsc command",  //a
                  "B. By using the Npm start command",
                  "C. By using the Compile command",
                  "D. By using the Node command"]
    },
    {
        name: "quiz_5",
        type: "list",
        message: chalk.greenBright("Which of the following is a common application of AI?"),
        choices: ["A. Word processing",
                  "B. Image recognition", //b
                  "C. File storage",
                  "D. Spreadsheet calculations"]
    }
]);

let score = 0;

console.log("\t");

const checkAnswer = (question: string, correctAnswer: string, index: number) => {
  if (question === correctAnswer) {
    console.log(index + "." + chalk.yellowBright("Right"));
    score++;
  } else {
    console.log(index + "." + chalk.red("Wrong! The correct answer is ") + correctAnswer);
  }
};

checkAnswer(questions.quiz_1, "B. A superset of JavaScript that adds static typing", 1);
checkAnswer(questions.quiz_2, "A. let count: number = 5", 2);
checkAnswer(questions.quiz_3, "C. Static type checking", 3);
checkAnswer(questions.quiz_4, "A. By using the Tsc command", 4);
checkAnswer(questions.quiz_5, "B. Image recognition", 5);

console.log(chalk.yellowBright("\nYour total score is: ") + score + chalk.yellowBright("/5"));

if (score === 5){
  console.log(chalk.yellowBright("Excellent! You got all answers correct."));
} else if (score >= 3){
  console.log(chalk.yellowBright("Good job! You got most of the answers correct."));
} else {
  console.log(chalk.yellowBright("Keep practicing! You'll get better with more practice."));
}


console.log();
console.log(chalk.greenBright("                                  Thanks For Using This App"));
console.log();
