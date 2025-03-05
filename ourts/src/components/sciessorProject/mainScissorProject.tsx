import { useState } from "react";

function MainScissorProject() {
    const [rock,setRock] = useState<string>(" ")
    const [paper,setPaper] = useState<string>(" ")
    const [scissor,setScissor] = useState<string>(" ")
    function computerPlay():string{
        const  choices = ["rock","paper","scissor"]
        const randomChoice = Math.floor(Math.random() * choices.length)
        return choices[randomChoice]

    }
    function playRound(playerSelection:string,computerSelection:string):string{
        if(playerSelection === computerSelection){
            return " It is a Tie"
        }else if( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")){
            return " You win " + playerSelection + " beats" + computerSelection;
        }else{
            return "You Lose " + computerSelection + " beats" + playerSelection
        }
    }
    const handleClick=(choice:string) :void =>{
        if(choice === "Rock"){
            setRock(playRound( rock, computerPlay()))
           
        }else if(choice === "Paper"){
            setRock("")
            setPaper(playRound(paper, computerPlay()))
        }else if(choice === "Scissor"){
            setScissor(playRound(scissor,computerPlay()))
        }
    };
    return (  <>
    <div style={{backgroundColor:"#f1f1f1",color:"black"}} className="h-200 w-200 shadow-2xl shadow-amber-500">
        <h1>Rock Paper Scissors Game</h1>
        <p>Choose Your Move:</p>
        <div className=" flex flex-row gap-2 justify-center items-center">
            <button onClick={()=>handleClick("Rock")} className="btn btn-lg btn-primary ">&#x1f44a; </button>
            <button onClick={()=>handleClick("Paper")} className="btn btn-lg btn-danger">&#x1f590;</button>
            <button onClick={()=>handleClick("Scissor")} className="btn btn-lg btn-success">&#x270c;</button>
        </div>
        <p>You Won</p>
        <p className="text-2xl text-red-400">Your Score <span>{paper}, {rock}, {scissor}</span> Computer Score : <span>0</span></p>
    </div>
    
    </>);
}

export default MainScissorProject;