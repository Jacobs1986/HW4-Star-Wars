//Universal variables
let hero;
let defender;
console.log(hero);
console.log(defender);

//First I need a code that will display the character that is selected

$("#luke-click").click(function () {
    if (hero == undefined) {
        hero = "luke";
        console.log("You have selected Luke.")
        clickMove("leia");
        clickMove("vader");
        clickMove("palpatine");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("luke");
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
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("leia")
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
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("")
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
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("")
    }
})

//function to move the character clicks, their names and health to the enemies area
function clickMove(character) {
    $(`#${character}-click`).appendTo(".enemies");
    $(`#${character}-name`).appendTo(".enemy-names");
    $(`#${character}-health`).appendTo(".enemy-health");
    $(`#${character}-pic`).css("border-color", "red");
}

//function to move a character to the defender area if the enemies area is filled
function clickMoveDefend(character2) {
    $(`#${character2}-click`).appendTo(".defender");
    $(`#${character2}-name`).appendTo(".defender-name");
    $(`#${character2}-health`).appendTo(".defender-health");
    defender = character2;
}