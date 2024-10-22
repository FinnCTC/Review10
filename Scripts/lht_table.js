"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Finn Mayberry
   Date:   10/21/2024

	
*/
 // set date
var thisDay = new Date("August 30, 2018");
// set table html
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";
// set end date
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);
//set for loop
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
// set if statement
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>"; 
      tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}

tableHTML += "</table>";
//add vaule to new var
document.getElementById("eventList").
innerHTML = tableHTML;