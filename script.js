var dayDisplay = document.querySelector("#currentDay");
var currentDate = moment();
dayDisplay.textContent = currentDate.format("dddd, MMM Do YYYY");

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time1 .description").val(localStorage.getItem("time1"));
$("#time2 .description").val(localStorage.getItem("time2"));
$("#time3 .description").val(localStorage.getItem("time3"));
$("#time4 .description").val(localStorage.getItem("time4"));
$("#time5 .description").val(localStorage.getItem("time5"));
$("#timeHappyHour .description").val(localStorage.getItem("timeHappyHour"));


function hourTimer() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var eachHour = parseInt($(this).attr("id").split("hour")[1]);

        if (eachHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else if (eachHour > currentTime) {
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

hourTimer();