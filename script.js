var d100 = {
    sides: 100,
}

var d20 = {
    sides: 20,
}

var d10 = {
    sides: 10,
}

var d8 = {
    sides: 8,
}

var d6 = {
    sides: 6,
}

var d4 = {
    sides: 4,
}

var diceType = {
    "d100" : d100,
    "d20" : d20,
    "d10" : d10,
    "d8" : d8,
    "d6" : d6,
    "d4" : d4,
}

function rollDice(diceType, diceCount){
    let display = document.getElementById("status");
    let result = Math.floor(Math.random() * diceType.sides) + 1;
    display.innerHTML = "You rolled " + result + " on a d" + diceType.sides + ".";
}

function totalUp(diceType, diceCount){
    let total = 0;
    let display = document.getElementById("status");
    for (i=0; i<diceCount; i++) {
        let roll = Math.floor(Math.random() * diceType.sides) + 1;
        total += roll;
    }
    display.innerHTML = "You rolled " + total + " on " + diceCount + "d" + diceType.sides + ".";
}