var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
//var currentBand = ;

// Keep track of which veggie we're on in the loop
//var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
//var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
//var veggieElement = document,getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	var currentBand = bands[loopTracker]; 
	var currentVeggie = vegetables[loopTracker]; 
	console.log(currentBand + currentVeggie);
	var bandElement = document.getElementById("boy-bands");
	var veggieElement = document.getElementById("vegetables");
	bandElement.innerHTML += "<div id='boy-bands'>" + "<p>" + "<ul>" + "<li>"  + currentBand + "</li>"  + "</ul>" + "</p>" + "</div>"; 
	veggieElement.innerHTML += "<div id='vegetables'>" + "<p>" + "<ul>" + "<li>"  + currentVeggie + "</li>"  + "</ul>" + "</p>" + "</div>"; 

}

  // Add the band names into the correct <div>
  //currentBand = "";


  // Add the veggie names into the correct <div>
  //currentVeggie = "";

