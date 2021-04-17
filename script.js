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
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));
$("#timeHappyHour .description").val(localStorage.getItem("timeHappyHour"));


function hourTimer() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var eachHour = parseInt($(this).attr("id").split("time")[1]);
        console.log(eachHour, currentTime);

        if (eachHour < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (eachHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

hourTimer();