// alert("JavaScript works!");

/*  Author: Kevin Ward
	Date: 6-18-2012
	Name: Deliverable 4
	Theme: Puggle Rampage! Library
*/

// Say function for space saving code power!
var say = function(message) { console.log(message); };

// Variables
var backStory = function () { 
	say("\"My wife " + Katt.nickName + " and I have " + howManyDogs + " cute dogs.\"");
	say("\"My Father-in-law also has a dog named Harley.\"");
				
	for (var key in json.dogs) {
		var dog = json.dogs[key];
		say("\"One of the dog's names is " + dog.name + ".\"");
		say("\"" + dog.name + " is " + dog.age + " years old, and is a " 
			+ dog.sex + " " + dog.breed + ".\"");
		say("\"We like to call " + dog.sex2 + " " + dog.nickName + ".\"");
		say("\"We give the dogs bones every once in a while, and " + dog.heShe 
			+ " " + dog.eatsBones + "!\"");
	};
	
	say("\"They are all so cute, but Fenix can get really hyper.\"");
	say("\"If one of us teases her too much she\'ll start whining and get all hyperactive.\"");
	say("\"She\'ll move around a lot, wagging her tail and jumping up on us.\"");
	say("\"I like to call it the " + puggleRam + "\"");
	
};
var puggleRam = "\'Puggle Rampage!\'";
var cuteLevel1 = "\"Isn\'t she so cute?\"";
var cuteLevel2 = "\"She\'s so CUTE!!!\"";
var howManyDogs = 2;
var teaseTime = true;
var toRam1 = true;
var toyType = "plushie"; // "plushie" or "tug rope"
var plushTypes = ["Dragon" , "Fox"];
var tugRopeTypes = ["Green and Black" , "Red and Yellow"];
var plushAvail = [ "sounds" , "doesn\'t sound" ];
var tugRopeAvail = [ "is" , "isn\'t" ];
var myFace = 10;
var toRam2 = true;
var wifeJoins = false;
var laugh = "\"Bwaahaahaa, Ur missing ur face!\"";
var storeNames = [ "GameStop", "Walmart", "Bookman\'s", "Harkin\'s" ],
	minPerStore = [ 15, 10, 20, 90 ];


// New Variables/Objects
// Human Objects
var Kevin = {
	realName:			"Kevin Ward",
	nickName:			"Kevin",
	age:				"30",
	rank:				"Worker Bee",
    works:				true,
    schools:			true,
    cars:				[ "Civic" ],
    seat:				"driver's seat"
};
var Katt = {
	realName:			"Katrina Ward",
	nickName:			"Katt",
	age:				"25",
	rank:				"Queen Bee",
    works:				false,
    schools:			true,
    cars:				[ "Bike" ],
    seat:				"passenger's seat"
};

var myName1 = Kevin.realName;
var myName2 = Katt.realName;

var driving = function() {
	say("\*" + Kevin.nickName + " and " + Katt.nickName + " get into the " 
	+ Kevin.cars + ", with Kevin in the " + Kevin.seat + " and Katt in the " 
	+ Katt.seat + ".\*");
	
	return;
};

// Canine JSON data Objects
var json = {
	"dogs": [
		{
			"UUID": 01,
			"name": "Snoopy",
			"sex": "male",
			"sex2": "him",
			"heShe": "he",
			"age": 8,
			"breed": "Chihuahua",
			"nickName": "Handsome Man",
			"eatsBones": "eats them slowly"
		},
		{
			"UUID": 02,
			"name": "Fenix",
			"sex": "female",
			"sex2": "her",
			"heShe": "she",
			"age": 5,
			"breed": "Puggle",
			"nickName": "Pretty Girl",
			"eatsBones": "eats them quickly"
		},
		{
			"UUID": 03,
			"name": "Harley",
			"sex": "male",
			"sex2": "him",
			"heShe": "he",
			"age": 1,
			"breed": "Shar Pei",
			"nickName": "A pain in the butt",
			"eatsBones": "just devours them"
		}
	]
};

///*	
// Argument Function
// How long should I tease the Puggle?
// Done
var teaseTime = function (teasingTime) {
	aWhile = true;
	if (teasingTime === aWhile) {
		say("\"Hey Katt, how long should I tease Fenix for?\"");
		say("\*Katt says.\* \"I\'d say about 10 minutes today.\"");
	}
	else {
		say("\"I shouldn\'t tease Fenix for very long, should I?\"");
		say("\*Katt says.\* \"Maybe only for 15 seconds.\"");
	}
	return;
};

// Double Argument Function
// What should I tease her with?
// Done
var toyTeasing = function (pronoun , teaseToy) {
	if ( toyType === "plushie" ) {
		say("\"" + pronoun + " thinking of using a " + teaseToy 
		+ " to tease Fenix with instead of my face!\"");
		say("\*I look around for the " + toyType + ".\*");
	} else {
		say("\"" + pronoun + " wanting to tease Fenix with a " + teaseToy + "!\"");
		say("\*I look around and find the " + toyType + ".\*");
	};
};

// Double String Function
// What kind of toy do I use of that type?
// Done
var funToys = function (toyType) {
	if ( toyType === "plushie" ){
		for (var i = 0, j = plushTypes.length; i < j; i++) {
			say( "\"The " + plushTypes[i] + " plushie, " + plushAvail[i] + " good.\"" );
		};
	} else {
		for (var i = 0, j = tugRopeTypes.length; i < j; i++) {
			say( "\"The " + tugRopeTypes[i] + " tug rope, " + tugRopeAvail[i] + " around here.\"" );
		};
	};
};

// While-Loop Function
// The Puggle is biting my face off little by little.
// Done
var biting = function () {
	while (myFace > 0) {
		say( "\"" + myFace + " inches of flesh are left on my face! Oh NOES!!!\"" );
		myFace--;
	};
	say( "\"I have no more face left!!!\"" );
	noFace = 0;
	return noFace;
};

// For-Loop Function
// Checking out stores after the Puggle Rampage!
// Done
var shopOneStore = function(storeName, minThisStore){
	say("\"So we check out " + storeName + " for "
		+ minThisStore + " minutes.\"");
	for (var minutes = 0; minutes < minThisStore; minutes += 5){
		var minRemain = minThisStore - minutes;
		say( "\"" + minutes + " have gone, " + minRemain + " left!\"" );
	};
	say( "\"We\'re done here at " + storeName + ", for now!\"" );
};

var goToStores = function(storeNames, minPerStore) {
	for (var storeNumber = 0; storeNumber < storeNames.length; storeNumber++){
		var storeName = storeNames[storeNumber],
			minThisStore = minPerStore[storeNumber];
		shopOneStore( storeName, minThisStore );
	};
};

// My Puggle Story in code.
backStory();
say("\*I choose to tease Fenix by saying, " + cuteLevel1 + " and " + cuteLevel2 + "\"");
teaseTime(true);
say("\*" + Kevin.nickName + " says.\* \"Okay!\"");
say("\*I wag my head back and forth, while whining back at her.\*");
if (toRam1 === true) {
	say("\*Fenix gets upset and hyper and she tries to bite my face off!\*");
} else {
	say("\*Fenix ignores it this time and we have furry snuggles.\*");
};
toyTeasing("I\'m" , toyType);
funToys(toyType);
say("\*Fenix is having fun with the " + toyType + ", so she avoids my face for the moment\*");
say("\*Oh noes!!! I spoke to soon!!! Fenix starts to attack my face again!!!\*");
biting();
say("\*After the attack, I look in the mirror.\*");
say("\"I have " + noFace + " inches of flesh on my face left, darn!\"");
say("\"I guess I\'ll have to get plastic surgery then.\"");
say("\*Snoopy looks at us.\*");
if (toRam2 === true){
	say("\*Snoopy wants to join in and help bite my face off.\*");
	if (howManyDogs > 1 && wifeJoins === true) {
		say("\*My wife, " + Katt.nickName + ", joins in and teases Fenix, by saying " + cuteLevel1 + "\*");
		say(puggleRam);
	} else {
		say("\*" + Katt.nickName + " looks at me and laughs saying\* " + laugh);
	};
} else {
	say("\*Snoopy looks on, ignores us, and just leaves it to Fenix.\*");
	if (wifeJoins === true) {
		say("\*" + Katt.nickName + " joins in instead and teases Fenix, by saying " + cuteLevel1 + "\*");
	} else {
		say("\*" + Katt.nickName + " just looks at us and laughs saying\* " + laugh);
	};
};
say("\*At this point I\'m pretty tired and want to hang out at some shops.\*");
say("\*I ask " + Katt.nickName + " where she would want to go.\*");
say("\*" + Katt.nickName + " says.\* \"I don\'t know where yet.\"");
say("\*I say.\* \"We\'ll find somewhere to go, or our names aren\'t " + myName1 + " and " + myName2 + "!\"");
say("\*" + Katt.nickName + " says.\* \"How about " + storeNames + "?\"");
say("\*" + Kevin.nickName + " says.\* \"Sure, that sound\'s great\"");
driving();
goToStores(storeNames, minPerStore);
say("\"That was fun, let\'s do it again tomorrow!\"");
say("\"The End!\"");


//*/