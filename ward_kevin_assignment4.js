/*  Author: Kevin Ward
	Date: 6-18-2012
	Name: Deliverable 4
	Theme: Library Testing Code
*/

// Say function for space saving code power!
var say = function(message) { console.log(message); };

// New Functions and stuff goes here.

console.log(KevinLabel);


// Creating my new Library from kevLib.
var myLib = new kevLib();

// Checking my phone function code.
say(myLib.checkPhone(kevPhone));

// Checking my email function code.
say(myLib.checkEmail(kevEmail));

// Checking my URL function code.
say(myLib.checkUrl(kevWeb));

// Checking my money function code.
say(myLib.checkMoney());

// Checking my string number code.
say(myLib.checkStringNumber());

// Checking my hours function code.
say(myLib.checkHours());
