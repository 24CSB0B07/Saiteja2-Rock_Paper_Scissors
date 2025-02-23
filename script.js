let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgCon=document.querySelector(".msg-container");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Draw. Play Again!";
    msgCon.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Computer Choice was ${compChoice}`;
        msgCon.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! Computer Choice was ${compChoice}`;
        msgCon.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    let userWin=true;
    if(userChoice===compChoice) drawGame();
    else{
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    })
})