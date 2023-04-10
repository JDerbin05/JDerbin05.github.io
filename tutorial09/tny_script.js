"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/
runClock();
setInterval("runClock()", 1000);
function runClock(){
   var currentDate = new Date();
   var dateStr = currentDate.toLocaleDateString();
   var timeStr = currentDate.toLocaleTimeString();
   //current time(top-left)
   document.getElementById("dateNow").innerHTML = dateStr + "<br>" + timeStr;
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDate.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDate)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
   //countdown
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}