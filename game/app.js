let userscore = 0;
let systscore = 0;
const userScore = document.querySelector("#user-score");
const systScore = document.querySelector("#sys-score");
const choice = document.querySelectorAll(".choises");
const msg = document.querySelector("#msg");
const reset = document.querySelector("#res");
reset.addEventListener("click",()=>{
    userScore.innerText = 0;
    systScore.innerText = 0;
    userscore = 0;
    systscore = 0;
})
const gensystchoice = ()=>{
    const option = ["Rock","Paper","Scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
};
choice.forEach((choises)=>{
    choises.addEventListener("click",()=>{
        const userchoice = choises.getAttribute("id");
        playgame(userchoice);
    });
});
const playgame = (userchoice)=>{
    const systchoice = gensystchoice();
    // console.log("Your choice",userchoice);
    // console.log("System choice",systchoice);
    if(userchoice === systchoice){
        gamedraw();
    }
    else{
        let usewin = true;
        if(userchoice === "Rock"){
            usewin = systchoice ==="Paper"?false:true;
        }
        else if(userchoice === "Scissors"){
            usewin = systchoice === "Rock"?false:true;
        }
        else{
            usewin = systchoice === "Rock"?true:false;
        }
        showwinner(usewin,userchoice,systchoice);
    }
    
};
const gamedraw = ()=>{
    // console.log("Game Draw");
    msg.innerText = "A tie! Looks like we're both equally awesome!";
    msg.style.backgroundColor = "black";
};
const showwinner = (usewin,userchoice,systchoice)=>{
    if(usewin){
        userscore++;
        userScore.innerText = userscore;
        console.log("You Won!");
        msg.innerText = `You Won! You played like a champ darling!`;
        msg.style.backgroundColor = "green";
    }
    else{
        systscore++;
        systScore.innerText = systscore;
        console.log("You Loss");
        msg.innerText = `You Loss! You played great! Just not 'win' great baby!.`;
        msg.style.backgroundColor = "red";
    }
};

