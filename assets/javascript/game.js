//Universal variables
let hero;
let defender;
let heroHealth;
console.log(hero);
console.log(defender);

//First I need a code that will display the character that is selected

$("#luke-click").click(function () {
    if (hero == undefined) {
        hero = "luke";
        heroHealth = $("#luke-health").text();
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
        heroHealth = $("#leia-health").text();
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
        heroHealth = $("#vader-health").text();
        console.log("You have selected Darth Vader.")
        clickMove("luke");
        clickMove("leia");
        clickMove("palpatine");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("vader")
    }
})

$("#palpatine-click").click(function () {
    if (hero == undefined) {
        hero = "palpatine";
        heroHealth = $("#palpatine-health").text();
        console.log("You have selected Paplaptine.")
        clickMove("luke");
        clickMove("leia");
        clickMove("vader");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("palpatine")
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
    $(`#${character2}-pic`).appendTo(".defender");
    $(`#${character2}-name`).appendTo(".defender-name");
    $(`#${character2}-health`).appendTo(".defender-health");
    defender = character2;
}