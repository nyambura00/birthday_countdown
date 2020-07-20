function myCountdown(){
var birthday = new Date("July 19 2020, 00:00:00").getTime(); //birthday!

//setting up my birthday function that runs after every second
const birthdayFunction = setInterval(function(){
var currentTime = new Date().getTime();         //the Now time
var timeLeft = birthday - currentTime;         //the time difference that exists in milliseconds

//changing the timeLeft in ms into various formats
var days = Math.floor(timeLeft / (1000*60*60*24));
var hours = Math.floor((timeLeft% (1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((timeLeft % (1000*60*60)) /(1000* 60));
var seconds = Math.floor((timeLeft % (1000*60)) / 1000);

//expressing content to the inner HTML
document.getElementById("dynamic-content").innerHTML = days + "days : " + hours + "hrs : " + minutes + " mins :" + seconds + " secs ";
//configuring a stopping function for the countdown
if(timeLeft < 0){
clearInterval(birthdayFunction);
const happyBirthday = document.getElementById("countdown-container");
happyBirthday.innerHTML = "Happy 22nd Birthday Winnie! @19/07/2020!";
happyBirthday.style.color = "white";
happyBirthday.style.alignItems = "center"; //I'll be checking on this one
}
}, 1000);
}
myCountdown()