const title = document.querySelector('input[name="title"]');
const description = document.querySelector('textarea');
const submitBtn= document.querySelector('#submit');
const notesList = document.querySelector('#displayNotes');

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const currentTitle = title.value;
    const currentDescription = description.value;
    
    if (!currentTitle && !currentDescription) {
        alert('Please enter a title or description for your task!');
        return;
    }

    const newNote = document.createElement('div');
    newNote.className = "notes";

    const newTitle = document.createElement('h3');
    newTitle.className = 'title';
    newTitle.innerText = currentTitle;

    const newdescr = document.createElement('p');
    newdescr.className = 'description';
    newdescr.innerText = currentDescription;
    
    const delbtn = document.createElement('button');
    delbtn.innerText = 'Delete'
    delbtn.className = 'delbtn';

    const updatebtn = document.createElement('button');
    updatebtn.innerText = 'update';
    updatebtn.className = 'updatebtn';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'note-buttons'; // Add a class for styling
    buttonContainer.append(delbtn);
    buttonContainer.append(updatebtn);

    const updTitle = document.createElement('input');
    updTitle.type = 'text';
    const updDescr = document.createElement('textarea');
    updTitle.style.display = 'none';
    updDescr.style.display = 'none';

    newNote.appendChild(newTitle);
    newNote.append(newdescr);
    newNote.append(buttonContainer);

    newNote.append(updTitle,updDescr);

    notesList.append(newNote);

    title.value = '';
    description.value = '';

    updatebtn.addEventListener('click',()=>{
        newTitle.style.display = 'none';
        newdescr.style.display = 'none';

        updTitle.style.display = 'block';
        updDescr.style.display = 'block';

        updTitle.value = newTitle.innerText;
        updDescr.value = newdescr.innerText;

        updatebtn.style.display = 'none';
        delbtn.style.display = 'none';

        const okBtn = document.createElement('button');
        okBtn.innerText = 'OK'
        okBtn.className = 'okBtn'

        newNote.append(okBtn);

        okBtn.addEventListener('click',()=>{
            newTitle.innerText = updTitle.value;
            newdescr.innerText = updDescr.value;

            updTitle.style.display = 'none'
            updDescr.style.display = 'none'

            newTitle.style.display = 'block'
            newdescr.style.display = 'block'

            updatebtn.style.display = 'inline-block'; 
            delbtn.style.display = 'inline-block';   

            okBtn.remove();
        })
    })
    delbtn.addEventListener('click',()=>{
        newNote.remove();
    })
});