let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const myMsg = document.querySelector("#msg");

//--Genrate the user choice----

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//--Genrate the computer choice----

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

//--Game Draw----

const gameDraw = () => {
  myMsg.innerText = "Game Draw Play Again!";
  myMsg.style.backgroundColor = "black";
};

//--Cheak Game Play----

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "sirssors" ? false : true;
    } else if (userChoice === "sirssors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//--Show Winner----

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        myMsg.innerText = `Congratulation! You Win ${userChoice} beat ${compChoice}`;
        myMsg.style.backgroundColor ="green";
      }else{
        compScore++;
        compScorePara.innerText = compScore;
        myMsg.innerText = `Oops Sorry! You Loss ${compChoice} beat ${userChoice}`;
        myMsg.style.backgroundColor = "red";
    };
};

