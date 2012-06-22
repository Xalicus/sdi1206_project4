/*  Author: Kevin Ward
	Date: 6-18-2012
	Name: Deliverable 4
	Theme: Library Code
*/

// Say function for space saving code power!
var say = function(message) { console.log(message); };

// New Functions and stuff goes here.

var kevLib = function () {
	// These are the Private Functions I'm going to code.
	
	// Phone Number Function
	var checkPhone = function(phoneNumber) {
		var num = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
		var OK = num.exec(phoneNumber);
		if (!OK) {
			say(phoneNumber + " is not a phone number! Try again...");
			return false;
		} else {
			say("Thanks a lot, your number is " + OK[0]);
			return true;
		};
	};

	// Email Function
	var checkEmail = function (emailAdd) {
		if (/^([a-z0-9])([\w\.\-\+])+([a-z0-9])\@((\w)([\w\-]?)+\.)+([a-z]{2,6})$/i.test(emailAdd)) {
	    	say("That\'s a great email! " + emailAdd);
	    	return true;
		} else {
			say("Really?!? " + emailAdd + " You aren\'t even trying are you???");
			return false;
		};
	};

	// URL Function
	var checkUrl = function (url) {
		var validUrl = new RegExp("^(http|https|ftp)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~])*$");
		if (!validUrl) {
			say("That url is not valid, try again!");
			return false;
		} else {
			say("Now that is a valid url.");
			return true;
		};
	};

	// Money Number Function
	var checkMoney = function (money) {
		var mon = money.toFixed(2);
		say("I have $" + mon + " cash in my wallet!");
		return true;
	};

	// String Number Function
	var checkStringNumber = function (strInt) {
	var stringInt = parseInt(strInt);
		if (strInt != stringInt) {
			say("That's not an Integer.");
			return false;
		} else {
			say("The number is " + strInt);
			return true;
		};
	};

	// Days Difference Function
	var checkDays = function (startDay, endDay) {
		var aDay = 1000*60*60*24;
		say(Math.ceil((endDay.getTime() - startDay.getTime())/(aDay)) + 
			" days have gone by from " + startDay + " to " + endDay + ".");
		return true;
	};


	// These are my Public Methods & Properties.
	return {
		"checkPhone"		: checkPhone,
		"checkEmail"		: checkEmail,
		"checkUrl"			: checkUrl,
		"checkMoney"		: checkMoney,
		"checkStringNumber"	: checkStringNumber,
		"checkDays"			: checkDays
	};
};

// My JSON data of users.
var users = {
	"Kev": {
		"firstName": "Kevin",
		"lastName": "Ward",
		"address": "337 S. Lazona Drive",
		"city": "Mesa",
		"state": "Arizona",
		"zip": "85204",
		"phoneNumber": "602-459-2236",
		"email": "Xalicus@fullsail.edu",
		"website": "http://knightmage.webs.com"
	},
	"Katt": {
		"firstName": "Katrina",
		"lastName": "Ward",
		"address": "337 S. Lazona Drive",
		"city": "Mesa",
		"state": "Arizona",
		"zip": "85204",
		"phoneNumber": "602-384-7960",
		"email": "HerEmail@gmail.com",
		"website": "http://kachinanova.webs.com"
	},
	"Sonya": {
		"firstName": "Sonya",
		"lastName": "Shilling",
		"address": "814 W. Pecos Road",
		"city": "Mesa",
		"state": "Arizona",
		"zip": "85210",
		"phoneNumber": "602-460-4407",
		"email": "mikamairai@gmail.com",
		"website": "Unknown"
	},
	"Michael": {
		"firstName": "Michael",
		"lastName": "Lamoreaux",
		"address": "814 W. Pecos Road",
		"city": "Mesa",
		"state": "Arizona",
		"zip": "85210",
		"phoneNumber": "Unknown",
		"email": "mikeofdoom@hotmail.com",
		"website": "Unknown"
	}
};


var kevName = users.Kev["firstName"] + " " + users.Kev["lastName"];
var kevAddress = users.Kev["address"] + "\n" + users.Kev["city"] + 
				", " + users.Kev["state"] + " " + users.Kev["zip"];
var kevPhone = users.Kev["phoneNumber"];
var kevEmail = users.Kev["email"];
var kevWeb = users.Kev["website"];
var KevinLabel = kevName + "\n" + kevAddress + "\n" + kevPhone + 
	"\n" + kevEmail + "\n" + kevWeb;


