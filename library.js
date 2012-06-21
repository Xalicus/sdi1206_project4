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

/*
	// Money Number Function
	var checkMoney = function () {
		if () {
		
		} else {
		
		};
	};

	// String Number Function
	var checkStringNumber = function () {
		if () {
		
		} else {
		
		};
	};
*/
	// Hours Difference Function
	var checkHours = function (startDate, endDate) {
		
		var elapsed = endDate - startDate;
		if (true) {
			say("Something witty goes here. " + "Elapsed time is " + elapsed);
			return true;
		} else {
			say("Another witty comment here.");
			return false;
		};
	};


/*
// record start time
var startTime = new Date();

// later record end time
var endTime = new Date();

// time difference in ms
var timeDiff = endTime - startTime;

// strip the miliseconds
var timeDiff /= 1000;

// get seconds
var seconds = Math.round(timeDiff % 60);

// remove seconds from the date
timeDiff /= Math.round(60);

// get minutes
var minutes = Math.round(timeDiff % 60);

// remove minutes from the date
timeDiff /= Math.round(60);

// get hours
var hours = Math.round(timeDiff % 24);

// remove hours from the date
timeDiff /= Math.round(24);

// the rest of timeDiff is number of days
var days = timeDays;

*/


	// These are my Public Methods & Properties.
	return {
		"checkPhone"		: checkPhone,
		"checkEmail"		: checkEmail,
		"checkUrl"			: checkUrl,
//		"checkMoney"		: checkMoney,
//		"checkStringNumber"	: checkStringNumber,
		"checkHours"		: checkHours
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

var json = {
	"dogs": [
		{
			"UUID": 01,
			"name": "Snoopy",
			"sex": "male",
			"age": 8,
			"breed": "Chihuahua",
			"nickName": "Handsome Man",
			"eatsBones": "eats them slowly"
		},
		{
			"UUID": 02,
			"name": "Fenix",
			"sex": "female",
			"age": 5,
			"breed": "Puggle",
			"nickName": "Pretty Girl",
			"eatsBones": "eats them quickly"
		},
		{
			"UUID": 03,
			"name": "Harley",
			"sex": "male",
			"age": 1,
			"breed": "Shar Pei",
			"nickName": "A pain in the butt",
			"eatsBones": "just devours them"
		}
	]
};





var kevName = users.Kev["firstName"] + " " + users.Kev["lastName"];
var kevAddress = users.Kev["address"] + "\n" + users.Kev["city"] + 
				", " + users.Kev["state"] + " " + users.Kev["zip"];
var kevPhone = users.Kev["phoneNumber"];
var kevEmail = users.Kev["email"];
var kevWeb = users.Kev["website"];
var KevinLabel = kevName + "\n" + kevAddress + "\n" + kevPhone + "\n" + kevEmail + "\n" + kevWeb;

/*
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
*/

/*
for (var key in json.dogs) {
		var dog = json.dogs[key];
		say("\"One of the dog's names is " + dog.name + ".\"");
		say("\"" + dog.name + " is " + dog.age + " years old, and is a " 
			+ dog.sex + " " + dog.breed + ".\"");
		say("\"We like to call " + dog.sex2 + " " + dog.nickName + ".\"");
		say("\"We give the dogs bones every once in a while, and " + dog.heShe 
			+ " " + dog.eatsBones + "!\"");
	};
*/


/*
var writePhone = function (first, second, third) {
	// TODO: I'll fill this in later to write code.
	say(first + " and " + second + " and " + third);
	return { };
};

var myPhones = writePhone("Galaxy S", "Galaxy S II", ["Galaxy S III", "Galaxy S IV"]);

*/
