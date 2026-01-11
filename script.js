let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
const gencompchoice=()=>{
    //rock paper choice
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const drawGame=()=>{
    console.log("The game was draw");
    msg.innerText="oops! it was a draw";
    msg.style.backgroundColor="black";
};
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win!!");
        msg.innerText="Congrats! You won.";
        msg.style.backgroundColor="green";
        userScore++;
        user.innerText=userScore
    }
    else{
        console.log("you lose");
        msg.innerText="you lose. Try again!"
        msg.style.backgroundColor="red";
        compScore++;
        comp.innerText=compScore;
    }
}
const playGamee=(userchoiceId)=>{
    console.log("user choice - ",userchoiceId);
    const compchoie=gencompchoice();
    console.log("computer choice-",compchoie);
    if(userchoiceId===compchoie){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoiceId==="rock"){
            userwin=compchoie==="paper"?false:true;
        }
        else if(userchoiceId==="paper"){
            userwin=compchoie==="scissors"?false:true;
        }
        else{
            userwin=compchoie==="rock"?false:true;
        }
        showwinner(userwin)
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoiceId=choice.getAttribute("Id");
        playGamee(userchoiceId);
    })   
})

    
