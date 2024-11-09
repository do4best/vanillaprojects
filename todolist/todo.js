const listcontainer = document.getElementById("list-container")
const inputBox = document.getElementById("input-box")

function addTask(){
    if(inputBox.value === ''){
        alert("Enter Some Data")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li)
    }
    inputBox.value = "";
    saveData()
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
})
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}