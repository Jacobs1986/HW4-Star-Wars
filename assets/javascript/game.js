//I'm going to need to be able to click on certain characters
//I'm just going to test it out for now
$("#lukeClick").click(function() {
    console.log("You've selected Luke.");
    $(".luke").appendTo(".enemies");
})

$("#leiaClick").click(function() {
    console.log("You've selected Leia.");
})

$("#darth-vaderClick").click(function() {
    console.log("You've selected Darth Vader.");
})

$("#emperor-palpatineClick").click(function() {
    console.log("You've selected Emperor Palpatine.");
})
