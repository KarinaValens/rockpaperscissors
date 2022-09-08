window.addEventListener("load", start); //game starts in page load

let num; //result from Math.random
let playerChoise; //value given to the player after click
let computerChoise; //value given to the computer acording to the Math.random
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");

function start() {
    //add a click eventListener to the bottons
    document.querySelector(".rock").addEventListener("click", opt1);
    document.querySelector(".paper").addEventListener("click", opt2);
    document.querySelector(".scissors").addEventListener("click", opt3);
};

function opt1() {
    playerChoise = "rock"; //give a value to the player after clicking the button rock
    player.classList.add("shake"); //add the shake animation to the player
    computer.classList.add("shake"); //add the shake animation to the computer
    player2(); //callback the computer´s random choice result 
    player.addEventListener("animationend", showresult); //display the choises just when the animationends
}

function opt2() {
    playerChoise = "paper"; //same as opt1
    player.classList.add("shake");
    computer.classList.add("shake");
    player2();
    player.addEventListener("animationend", showresult);
}

function opt3() {
    playerChoise = "scissors"; //same as opt1
    player.classList.add("shake");
    computer.classList.add("shake");
    player2();
    player.addEventListener("animationend", showresult);
}

function player2() {
    num = randomHand(); //call back the result from the Math.random ;
    //console.log(num);
    if (num == 1) {
        document.querySelector("#player2").classList.add("rock"); //adding classes acording to the result of the Math.random 
        computerChoise = "rock"; //assign a string value to the computer acording to the Math.random result 
    };
    if (num == 2) {
        document.querySelector("#player2").classList.add("paper");
        computerChoise = "paper";
    }
    if (num == 3) {
        document.querySelector("#player2").classList.add("scissors");
        computerChoise = "scissors";
    }
}

function randomHand() {
    //ramdom math function for computer option
    return Math.floor(Math.random() * 3) + 1; //random number between 1-3
}

function showresult() {
    player.classList.remove("shake");
    computer.classList.remove("shake");
    //comparing the results from playerChoise and computer choise to call the winner funcion
    if (playerChoise == "rock") {
        player.classList.add("rock");
        winner();
    }
    if (playerChoise == "paper") {
        player.classList.add("paper");
        winner();
    }
    if (playerChoise == "scissors") {
        player.classList.add("scissors");
        winner();
    }
}

function winner() {
    if (playerChoise == computerChoise) {
        document.querySelector("#draw").classList.remove("hidden")
    } else if (playerChoise == "paper" && computerChoise == "rock" ||
        playerChoise == "rock" && computerChoise == "scissors" ||
        playerChoise == "scissors" && computerChoise == "paper") {
        document.querySelector("#win").classList.remove("hidden");
    } else {
        document.querySelector("#lose").classList.remove("hidden");
    }
    reset();
}

function reset() {
    //resert automatically after 2 seconds
    setTimeout(function () {
        //clear all the classes from player and computer
        player.classList.value = "";
        computer.classList.value = "";
        document.querySelector("html").offsetHeight;
        //adding the hidden class to the text elements
        document.querySelector("#draw").classList.add("hidden");
        document.querySelector("#win").classList.add("hidden");
        document.querySelector("#lose").classList.add("hidden");
        //adding the class player to the player and computer to display the img
        player.classList.add("player");
        computer.classList.add("player");
    }, 2000), true;

    //while(resultList.hasChildNodes(){resultList.removeChild(resultList.firsElementChild)})
};