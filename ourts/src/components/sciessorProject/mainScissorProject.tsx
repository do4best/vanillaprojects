import { useState } from "react";

function MainScissorProject() {
    const [rock,setRock] = useState<string>(" Rock")
    const [paper,setPaper] = useState<string>(" Paper")
    const [scissor,setScissor] = useState<string>(" Scissor")
    function computerPlay():string{
        const  choices = ["rock","paper","scissor"]
        const randomChoice = Math.floor(Math.random() * choices.length)
        return choices[randomChoice]

    }
    const handleClick=(choice:string) :void =>{
        if(choice === "Rock"){
            console.log("You pressed" + rock + " computer Choices " + computerPlay())
        }else if(choice === "Paper"){
            console.log("You pressed " + paper + " computer Choices " + computerPlay())
        }else if(choice === "Scissor"){
            console.log("You Pressed" + scissor + " computer Choices " + computerPlay())
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
        <p>Your Score <span>0</span> Computer Score : <span>0</span></p>
    </div>
    
    </>);
}

export default MainScissorProject;