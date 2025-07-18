let userScore = 0;
let compScore = 0;

 const choices = document.querySelectorAll('.choice'); 
const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"]
      const randomIndex =   Math.floor(Math.random()*3);
            return options[randomIndex];
        //rock, paper, scissors;
}


const drawGame = () => {
    console.log("Game was draw !")
}
const playGame = (userChoice) => {
        console.log("User Choice =", userChoice);

        //  generate computer choice 

        const compChoice = genCompChoice();
                console.log("Computer Choice =", compChoice);    


        if (userChoice === compChoice) {
            //Draw Game
            drawGame()
        }






};



choices.forEach((choice) =>{
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log('choice made was',userChoice)
            playGame(userChoice);
    })
})