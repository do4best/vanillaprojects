const listcontainer = document.getElementById("list-container")// this points to the list items
const inputBox = document.getElementById("input-box") // this points to the input box

function addTask(){ // the function is responsible for add the task
    if(inputBox.value === ''){ // putting a condation if input value is null display the alert option
        alert("Enter Some Data")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    inputBox.value = "";
    saveData()
}
listcontainer.addEventListener("keypress","click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()

    }
})
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}