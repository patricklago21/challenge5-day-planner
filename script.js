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