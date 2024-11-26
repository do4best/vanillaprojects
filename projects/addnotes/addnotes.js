function getColor(){
    let letters='ABCDEF1234567890';
let color ="#";
for(let i=0; i<6; i++){
    color += letters[ Math.floor(Math.random()*i)]
}
return color;
}

const addBtn = document.querySelector("#addBtn")// select the id addBtn
const main = document.querySelector("#main") // select maid id for display the items 
addBtn.addEventListener("click",addNote)// as the id button wil show to the left top it should be listening the event listner
function addNote(){    // this fucntion is called by the event listner
    const note = document.createElement("div")// a node name note is created with the help of div element
    note.classList.add("note") // as the div element is created and the add class is added
    note.innerHTML = `
    <div class="note">
            <div class="tool">
               <span style="position: relative; left:-280px;">First Note</span> <i class=" save fa fa-save"></i>
                <i class="trash fa fa-trash"></i>
            </div>
            <textarea></textarea>
        </div>`;
        const save = note.querySelector(".save")
        const trash = note.querySelector(".trash")
        const textarea = note.querySelector("textarea")
      
        save.addEventListener("click",saveNotes)
        textarea.addEventListener("input",saveNotes)
        trash.addEventListener("click",()=>{
            note.remove();
            saveNotes();
        })
        main.appendChild(note)
}
function saveNotes(){
        const notes = document.querySelectorAll(".note textarea")
        const data = Array.from(notes).map(note => note.value)
      
        if(data.length === 0){
            localStorage.removeItem("notes")
        }else{
            localStorage.setItem("notes",JSON.stringify(data))
        }
}
function loadNotes(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if(lsNotes !== null){
        lsNotes.forEach(noteText =>{
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;
        })
    }else{
        addNote();
    }
}
loadNotes();