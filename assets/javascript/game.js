//Universal variables
let hero;
let defender;
let heroHealth;
let defenderHealth
console.log(hero);
console.log(defender);

//Characters attack power
let lukePower = 20;
let leiaPower = 10;
let vaderPower = 25;
let palpatinePower = 30;

//Attack area
let attackPower;
let heroAttackPower;
let defenderAttackPower;

//First I need a code that will display the character that is selected

$("#luke-click").click(function () {
    if (hero == undefined) {
        hero = "luke";
        heroHealth = $("#luke-health").text();
        heroAttackPower = lukePower;
        console.log("You have selected Luke.")
        clickMove("leia");
        clickMove("vader");
        clickMove("palpatine");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("luke");
        defenderAttackPower = lukePower;
    }
})

$("#leia-click").click(function () {
    if (hero == undefined) {
        hero = "leia";
        heroHealth = $("#leia-health").text();
        heroAttackPower = leiaPower;
        console.log("You have selected Leia.")
        clickMove("luke");
        clickMove("vader");
        clickMove("palpatine");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("leia");
        defenderAttackPower = leiaPower;
    }
})

$("#vader-click").click(function () {
    if (hero == undefined) {
        hero = "vader";
        heroHealth = $("#vader-health").text();
        heroAttackPower = vaderPower;
        console.log("You have selected Darth Vader.")
        clickMove("luke");
        clickMove("leia");
        clickMove("palpatine");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("vader");
        defenderAttackPower = vaderPower;
    }
})

$("#palpatine-click").click(function () {
    if (hero == undefined) {
        hero = "palpatine";
        heroHealth = $("#palpatine-health").text();
        heroAttackPower = palpatinePower;
        console.log("You have selected Paplaptine.")
        clickMove("luke");
        clickMove("leia");
        clickMove("vader");
    }
    else if (hero !== undefined && defender == undefined) {
        clickMoveDefend("palpatine");
        defenderAttackPower = palpatinePower;
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
    defenderHealth = $(`#${character2}-health`).text();
}


$("#attack-button").click(function () {
    //I want the button to FIRST check to see if a hero and an oppenent have been selected.
    if (hero == undefined || defender == undefined) {
        alert("You need to select the characters first before you can battle.");
        return;
    } else {
        //The heroAttackPower needs to be taken from the defenderHealth and the defenderAttackPower needs to be taken from the heroHealth. These new values need to be displayed in the appropriate areas.
        let heroDamage = heroHealth - defenderAttackPower;
        $(`#${hero}-health`).text(heroDamage);
        heroHealth = heroDamage;

        let defenderDamage = defenderHealth - heroAttackPower;
        $(`#${defender}-health`).text(defenderDamage);
        defenderHealth = defenderDamage;
        //The heroAttackPower needs to increase.
        //The health of the two characters need to be checked to see if their health is abover zero
        if (heroHealth > 0) {
            heroAttackPower = heroAttackPower + 5;
        } else {
            $("#attack-button").attr("disabled", true);
            console.log("you lose")
        }
    }
})