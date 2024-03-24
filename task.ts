#! /usr/bin/env node 
import inquirer from "inquirer";
const randNum = Math.floor (Math.random() * 10 + 1);
const ans = await inquirer.prompt([{
name:"userGuessNum",
type:"number",
message :"please guess a number from 1 to 10",
}]);
if (ans.userGuessNum === randNum ) {
    console.log("you win");
} else 
{
    console.log("you lose");
}