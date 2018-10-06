
//New nodes

var newH = document.createElement("h3");
var time = document.getElementById("time");
var today = new Date();
var hourNow = today.getHours();
var minNow = today.getMinutes();
var greeting;


// Appends a greeting to match the time of day, dependant on time.

if (hourNow > 17) {

  greeting = "Good evening, the time is now: ";

} else if (hourNow >= 12) {

  greeting = "Good afternoon, the time is now: ";

} else if (hourNow > 4) {

  greeting = "Good morning, the time is now: ";

} else {

  greeting = "Hello, the time is now: ";

}

// Adds the 0 to the single digit minutes, ex: 11:1 becomes 11:01
var minutes;

if (minNow <= 9) {

  minutes = "0" + minNow;

} else {

  minutes = minNow;

}

// Convert militry time (24) to 12/12,

var hourConv;

if (hourNow == 13) {

  hourConv = "1";

} else if (hourNow == 14) {

  hourConv = "2";

} else if (hourNow == 15) {

  hourConv = "3";

} else if (hourNow == 16) {

  hourConv = "4";

} else if (hourNow == 17) {

  hourConv = "5";

} else if (hourNow == 18) {

  hourConv = "6";

} else if (hourNow == 19) {

  hourConv = "7";

} else if (hourNow == 20) {

  hourConv = "8";

} else if (hourNow == 21) {

  hourConv = "9";

} else if (hourNow == 22) {

  hourConv = "10";

} else if (hourNow == 23) {

  hourConv = "11";

} else if (hourNow == 24) {

  hourConv = "12";

} else if (hourNow == 0) {

  hourConv= "12";

} else {

  hourConv = hourNow;
}



// Appends all the above to the document in the <div> with the id="time"
time.appendChild(newH);
newH.innerHTML =  greeting + hourConv + ":" + minutes;




/* CSS style change based on time of day. Just remove if you do not want this feature */
var styleChange = document.getElementById("time")


// Switches to a different class, that matches the time of day
if (hourNow > 17) {

  styleChange.setAttribute("class", "night");

} else if (hourNow >= 12) {

  styleChange.setAttribute("class", "noon");

} else if (hourNow > 0) {

  styleChange.setAttribute("class", "morning");

} else {

  styleChange.setAttribute("class", "regular");

}
