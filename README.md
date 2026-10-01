SpendWise

SpendWise is a simple budget-tracking web application designed to help users understand their monthly spending. The JavaScript foundation allows users to enter their monthly budget and total expenses, calculates the remaining balance, and displays the results in the browser console.

JavaScript Concepts Implemented

This project implements several JavaScript concepts covered in the assignment:

Variables

Data types

User input

Number conversion

Arithmetic calculations

Functions

Conditional statements

Console output

How Variables Are Used

Variables are used to store important budgeting information.

For example:

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


monthlyBudget stores the user's monthly budget, totalExpenses stores the user's expenses, and remainingBalance stores the calculated amount left after expenses.

How User Input Is Collected

SpendWise uses JavaScript's prompt() function to collect information from the user.

let budgetInput = prompt("Enter your monthly budget:");
let expensesInput = prompt("Enter your total expenses:");


The values entered by the user are initially received as text. They are converted into numbers using the Number() function:

monthlyBudget = Number(budgetInput);
totalExpenses = Number(expensesInput);

How Calculations Are Performed

The application calculates the remaining balance by subtracting total expenses from the monthly budget.

remainingBalance = monthlyBudget - totalExpenses;


The calculation is also placed inside a reusable function:

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


This makes the calculation easier to reuse and keeps the application logic organized.

How Functions Organize the Code

Functions are used to separate different tasks in the application.

The calculateRemainingBalance() function performs the budget calculation:

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


The displayBudgetResults() function displays the budget information and status in the browser console.

Using functions makes the code easier to read, maintain, test, and reuse.

Displaying Results

The application displays the calculated results in the browser console using console.log().

Example output:

========== SpendWise Budget Summary ==========
Monthly Budget: $2000.00
Total Expenses: $750.00
Remaining Balance: $1250.00
Status: You are within your budget.
==============================================


The application also checks whether the user is within budget, has used the entire budget, or has exceeded the budget.

Testing

The application was tested using different budget and expense values to verify that the remaining balance is calculated correctly.

Example:

Budget: $2,000

Expenses: $750

Remaining Balance: $1,250

The application was also tested when expenses equal the budget and when expenses exceed the budget.

Project Files

index.html - Contains the structure of the SpendWise webpage.

style.css - Contains the styling for the webpage.

script.js - Contains the JavaScript variables, user input, calculations, functions, and console output.

README.md - Explains the project and JavaScript concepts used.
