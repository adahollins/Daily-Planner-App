$(document).ready(function() {

// Current Day
var today = dayjs().format('dddd, MMMM D');
$("#currentDay").text(today);

// Container for Times
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (let i = 0; i < times.length; i++) {

    var div = $("<div>");
    var textHours = $("<h4>");
    var saveBtn = $("<button>");
    var input = $("<input>");

    div.addClass("description timeblock");

    textHours.addClass("hour");
    textHours.text(times[i]);

    input.addClass("row")

    saveBtn.addClass("saveBtn");
    
    $(".container").append(div);
    $(".container").append(textHours);
    $(".container").append(input);
    $(".container").append(saveBtn);

//Changes colour depending on time
    var currentTime = dayjs().format('hA');
    if (textHours == currentTime) {
        input.addClass("present");
    } else if (textHours >= currentTime) {
        input.addClass("past");
    } else {
        input.addClass("future");
    };
};

});