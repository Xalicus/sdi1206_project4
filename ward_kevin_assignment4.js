/*  Author: Kevin Ward
	Date: 6-18-2012
	Name: Deliverable 4
	Theme: Library Testing Code
*/

// Creating my new Library from kevLib.
var myLib = new kevLib();

// Variable needed for checkMoney function
var cash = 36923.946

// Variables for checkDays function
var birthday = new Date(1981, 7, 9); // My actual birthday, August 9th, 1981
var today = new Date();

// Checking my phone function code.
say(myLib.checkPhone(kevPhone));

// Checking my email function code.
say(myLib.checkEmail(kevEmail));

// Checking my URL function code.
say(myLib.checkUrl(kevWeb));

// Checking my money function code.
say(myLib.checkMoney(cash));

// Checking my string number code.
say(myLib.checkStringNumber("5069"));

// Checking my days function code.
say(myLib.checkDays(birthday, today));

