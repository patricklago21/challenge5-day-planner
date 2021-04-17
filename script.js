var dayDisplay = document.querySelector("#currentDay");
var currentDate = moment();

dayDisplay.textContent = currentDate.format("dddd, MMM Do YYYY");
