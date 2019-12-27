//I'm going to need to be able to click on certain characters
//I'm just going to test it out for now
$("#lukeClick").click(function() {
    console.log("You've selected Luke.");
    $("#leia").appendTo(".enemies").offset({ left: 0 });
})

$("#leiaClick").click(function() {
    console.log("You've selected Leia.");
    $("#leia").offset({ left: 1});
    $("#luke").appendTo(".enemies");
    $("#darth-vader").appendTo(".enemies").offset({ left: 0});
})

$("#darthvaderClick").click(function() {
    console.log("You've selected Darth Vader.");
    console.log($("#darthvader-pic").height());
})

