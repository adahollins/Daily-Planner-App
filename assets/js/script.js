$(document).ready(function() {

// Current Day
var today = dayjs().format('dddd, MMMM D');
$("#currentDay").text(today);

// Container for Times
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (let i = 0; i < times.length; i++) {

    var textHours = $("<h4>");
    var saveBtn = $("<button>");
    var input = $("<textarea>");


textHours.addClass("hour");
textHours.text(times[i]);

input.addClass("description");

saveBtn.addClass("saveBtn");

$(".container").append(textHours);
   // $(".container").append(input);
   // $(".container").append(saveBtn);

    var newsDiv = $('<div class="row time-block">').appendTo($(".container"));
    $(newsDiv).each(function() {
        newsDiv.wrap("<div>");
        newsDiv.append(input);
        newsDiv.append(saveBtn); 
        newsDiv.wrap("</div>");
    });

//Changes colour depending on time
};
for (let i = 0; i < textHours.length; i++) {
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