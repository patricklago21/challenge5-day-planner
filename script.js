var dayDisplay = document.querySelector("#currentDay");
var currentDate = moment();
dayDisplay.textContent = currentDate.format("dddd, MMM Do YYYY");

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

$("#timeNine .description").val(localStorage.getItem("timeNine"));
$("#timeTen .description").val(localStorage.getItem("timeTen"));
$("#timeEleven .description").val(localStorage.getItem("timeEleven"));
$("#timeTwelve .description").val(localStorage.getItem("timeTwelve"));
$("#timeOne .description").val(localStorage.getItem("timeOne"));
$("#timeTwo .description").val(localStorage.getItem("timeTwo"));
$("#timeThree .description").val(localStorage.getItem("timeThree"));
$("#timeFour .description").val(localStorage.getItem("timeFour"));
$("#timeFive .description").val(localStorage.getItem("timeFive"));
$("#timeHappyHour .description").val(localStorage.getItem("timeHappyHour"));
