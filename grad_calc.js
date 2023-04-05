"use strict";
runClock();
setInterval("runClock()", 1000);
function runClock(){
   var currentDate = new Date();
   var dateStr = currentDate.toLocaleDateString();
   var timeStr = currentDate.toLocaleTimeString();
   document.getElementById("current").innerHTML = dateStr + " " + timeStr;
   var gradDate = new Date("May 28, 2023");
   var daysLeft = (gradDate - currentDate)/(1000*60*60*24);
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
   //countdown
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}