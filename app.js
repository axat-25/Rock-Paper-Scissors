let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice'); 
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("you win !");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        console.log("you lose !");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice} `
        msg.style.backgroundColor = "maroon"

    }
}

const drawGame = () => {
    console.log("Game was draw !");
    msg.innerText = "Draw hogya";
    msg.style.backgroundColor = "black"
    // msg.style.borderColor = "white"
    
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);    

    let userWin;  // ✅ yahan pe declare kiya hai, taaki neeche use ho sake

    if (userChoice === compChoice) {
        drawGame();
        return; // ✅ return taaki showWinner na chale draw ke case me
    } else {
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
    }

    showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
