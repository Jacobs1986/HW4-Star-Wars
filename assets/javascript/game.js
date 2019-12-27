//First I need a code that will display the character that is selected

$("#luke-click").click(function () {
    console.log("You have selected Luke.")
    clickMove("leia");
    clickMove("vader");
    clickMove("palpatine");
})

$("#leia-click").click(function () {
    console.log("You have selected Leia.")
    clickMove("luke");
    clickMove("vader");
    clickMove("palpatine");
})

$("#vader-click").click(function () {
    console.log("You have selected Darth Vader.")
    clickMove("luke");
    clickMove("leia");
    clickMove("palpatine");
})

$("#palpatine-click").click(function () {
    console.log("You have selected Luke.")
    clickMove("luke");
    clickMove("leia");
    clickMove("vader");
})


//function to move the character clicks, their names and health.
function clickMove(character) {
   $(`#${character}-click`).appendTo(".enemies");
   $(`#${character}-name`).appendTo(".enemy-names");
   $(`#${character}-health`).appendTo(".enemy-health");
   $(`#${character}-pic`).css("border-color", "red");
}