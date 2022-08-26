//game starts in page load

window.addEventListener("load", start);

let num;
let playerChoise;
let computerChoise;
const player = document.querySelector("#player1");
const computer = document.querySelector("#player2");

function start() {
    //player a click event listener an option and ramdom math function for computer option
    //addEventListener with an anonymous function
    document.querySelector(".rock").addEventListener("click", opt1);
    document.querySelector(".paper").addEventListener("click", opt2);
    document.querySelector(".scissors").addEventListener("click", opt3);
};

function opt1() {
    playerChoise = "rock";
    player.classList.add("shake");
    computer.classList.add("shake");
    player2();
    player.addEventListener("animationend", showresult);
}

function opt2() {
    playerChoise = "paper";
    player.classList.add("shake");
    computer.classList.add("shake");
    player2();
    player.addEventListener("animationend", showresult);
}

function opt3() {
    playerChoise = "scissors";
    player.classList.add("shake");
    computer.classList.add("shake");
    player2();
    player.addEventListener("animationend", showresult);
}


function player2() {
    //call back randomHand();
    num = randomHand();
    console.log(num);

    //adding classes ramdomly   
    if (num == 1) {
        document.querySelector("#player2").classList.add("rock");
        computerChoise = "rock";
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
    //console.log("random");
    return Math.floor(Math.random() * 3) + 1; //random number between 1-3

}


function showresult() {

    if (playerChoise == "rock") {
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player2").classList.remove("shake");
        player.classList.add("rock");
        winner();
    }
    if (playerChoise == "paper") {
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player2").classList.remove("shake");
        player.classList.add("paper");
        winner();
    }
    if (playerChoise == "scissors") {
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player2").classList.remove("shake");
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

}



function restar() {
    player.classList.value = "";
    computer.classList.value = "";
    document.querySelector("html").offsetHeight;
    player.classList.add("player");
    computer.classList.add("player");
}