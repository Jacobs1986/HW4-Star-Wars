//Universal variables
let hero;
let defender;
console.log(hero)

//First I need a code that will display the character that is selected

$("#luke-click").click(function () {
    if (hero == undefined) {
        hero = "luke";
        console.log("You have selected Luke.")
        clickMove("leia");
        clickMove("vader");
        clickMove("palpatine");
    }
})

$("#leia-click").click(function () {
    if (hero == undefined) {
        hero = "leia";
        console.log("You have selected Leia.")
        clickMove("luke");
        clickMove("vader");
        clickMove("palpatine");
    }
})

$("#vader-click").click(function () {
    if (hero == undefined) {
        hero = "vader";
        console.log("You have selected Darth Vader.")
        clickMove("luke");
        clickMove("leia");
        clickMove("palpatine");
    }
})

$("#palpatine-click").click(function () {
    if (hero == undefined) {
        hero = "palpatine";
        console.log("You have selected Paplaptine.")
        clickMove("luke");
        clickMove("leia");
        clickMove("vader");
    }
})

//function to move the character clicks, their names and health.
function clickMove(character) {
    $(`#${character}-click`).appendTo(".enemies");
    $(`#${character}-name`).appendTo(".enemy-names");
    $(`#${character}-health`).appendTo(".enemy-health");
    $(`#${character}-pic`).css("border-color", "red");
}