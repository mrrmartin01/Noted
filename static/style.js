function openPage(page) {
    if(page === 'refresh') {
        window.location.href = 'index.html';
    } else if (page === 'login'){
        window.location.href ='login.html';
    }else if (page === 'notepad'){
        window.location.href ='textHolder.html';
    } else if (page === 'back')
    window.location.href = 'note.html';
    else if (page === 'textHolder')
        window.location.href = 'textHolder.html'; 
};


function validateEmail() {
    const email = document.getElementById('emailSide').value;
    const password = document.getElementById('pwd').value;


    if (email ==="" && password ===""){
        alert('Please fill the form');
        return false;
    }
    else if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return false;
    } else if(password === "") {
        alert('Password field cannot be empty');
        return false;
    } else {
        window.location.href = 'note.html';
        return true;
    }
};


let noteCounter = 1; 
const colors = ['#876FB9', '#CC768F', '#639F49', '#6B85BB', '#ff9f00', '#050','#FF5733', '#C70039', '#900C3F', '#581845', '#5D6D7E','#9A7D0A', '#A04000', '#6E2C00', '#004D40', '#1B5E20','#9E9E9E', '#424242', '#1B1464', '#4A148C', '#7B1FA2','#AF52BF', '#2E86C1', '#154360', '#5D6D7E', '#F1C40F']; // Array of colors
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.querySelector('.moreBox');
    
    if (moreButton) {
        moreButton.addEventListener('click', () => {
            openNewNote();
        });
    }

    const loadingToNotes = document.querySelector('.eachBox');
    
    if (loadingToNotes) {
        loadingToNotes.addEventListener('click', () => {
            openPage('notepad');
        });
    }
});


function alterSection() {
    const faEllipsisV = document.querySelector('.fa-ellipsis-v');
    const editor = document.getElementById('editor');
    const saveButton =document.querySelector('saveButton')
    const body = document.body;

    const altSection = document.createElement('div');
    altSection.classList.add('altSection');
    altSection.innerHTML = `
        <h5 class="optionHeader">What next?</h5>
        <hr class="thickHR">
        <button class="saveButton">Save</button>
        <hr>
        <button class="deleteButton">Delete</button>
    `;

    faEllipsisV.addEventListener('click', () => {
        if (!body.contains(altSection)) {
            body.appendChild(altSection);
        }

        else if (body.contains(altSection)){
            body.removeChild(altSection);
        }
    });

    editor.addEventListener('click', () => {
        if(body.contains(altSection)){
            body.removeChild(altSection)
        }
    });

    saveButton.addEventListener('click', () => {
        console.log(editor.value)
    })
}



// Call the function to set up the event listener
alterSection();

function openNewNote(id) {
    const gridContainer = document.querySelector('.boxes');
    const moreBox = document.querySelector('.moreBox'); 
    const newNote = document.createElement('div');
    newNote.classList.add('eachBox');
    newNote.style.display = 'grid';         
    newNote.style.backgroundColor = getRandomColor(); 
    newNote.innerHTML = `
        <div class="ellipsis-icon">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <h5 class="noteHeader" style="color: white;">New Note ${noteCounter}</h5>
        <h6 class="noteText">Contents here....</h6>
    `;
    gridContainer.insertBefore(newNote, moreBox);
    noteCounter++; 

    newNote.addEventListener('click', () => {
        openPage('notepad');
    });
}






// function getNotes(){
//     return JSON.parse(localStorage.getItem("noted-notes") || "[]");
// }


// function saveNotes(notes){
//     localStorage.setItem("noted-notes", JSON.stringify(notes));
// }


// function addNote(){

// }
  

// function updateNotes(){

// }


// function deleteNote(){

// }






    
    // const titleInput = document.getElementById('titleInput');
    // const editor = document.getElementById('editor');

    // // Load saved data from local storage on page load
    // window.addEventListener('load', () => {
    //     if (localStorage.getItem('title')) {
    //         titleInput.value = localStorage.getItem('title');
    //     }
    //     if (localStorage.getItem('notes')) {
    //         editor.value = localStorage.getItem('notes');
    //     }
    // });

    // // Autosave function for input and textarea elements
    // titleInput.addEventListener('input', () => {
    //     localStorage.setItem('title', titleInput.value);
    // });

    // editor.addEventListener('input', () => {
    //     localStorage.setItem('notes', editor.value);
    // });