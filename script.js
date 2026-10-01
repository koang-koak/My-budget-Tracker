// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. Store application data using variables

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


// 2. Function to calculate the remaining balance

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// 3. Function to display budget results

function displayBudgetResults(budget, expenses, balance) {
    console.log("========== SpendWise Budget Summary ==========");
    console.log("Monthly Budget: $" + budget.toFixed(2));
    console.log("Total Expenses: $" + expenses.toFixed(2));
    console.log("Remaining Balance: $" + balance.toFixed(2));

    if (balance > 0) {
        console.log("Status: You are within your budget.");
    } else if (balance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You are over your budget.");
    }

    console.log("==============================================");
}


// 4. Collect user input

let budgetInput = prompt("Enter your monthly budget:");

let expensesInput = prompt("Enter your total expenses:");


// 5. Convert user input from text to numbers

monthlyBudget = Number(budgetInput);
totalExpenses = Number(expensesInput);


// 6. Perform the budget calculation

remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);


// 7. Display the results in the browser console

displayBudgetResults(
    monthlyBudget,
    totalExpenses,
    remainingBalance
);
