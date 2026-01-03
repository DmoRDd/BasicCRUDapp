import { readData } from '../libs/fileSystem.lib';

const notes = readData();

const getNotes = () => {
    return notes;
}


const getNoteById = (id) => {
    const gNote = notes.find(note => note.id == id);

    if(!gNote){
        throw new Error("Aradiginiz not bulunamadi...");
    };

    return gNote;
}


const addNote = (title, content) => {
    const note = {
        id : notes.length + 1,
        title : title,
        content : content
    }

    if(!note.title){
        throw new Error("Not basligi girmelisiniz...");
    }

    notes.push(note);
    return note;
};

const updateNote = (id, title, content) => {
    const uNote = notes.find(note => note.id == id); 
    
    if(!uNote){
        throw new Error("Aradiginiz not bulunamadi...")
    };

    if(title != undefined){
        uNote.title = title;
    }
    if(content != undefined){
        uNote.content = content;
    }
    
    return uNote;
};


const deleteNote = (id) => {
    const dNote = notes.find(note => note.id == id);

    if (!dNote) {
        throw new Error("Aradiginiz not bulunamadi...");
    }

    const noteIndex = notes.indexOf(dNote);
    notes.splice(noteIndex, 1);

    return dNote;
}

export default {getNotes, getNoteById, addNote, updateNote, deleteNote};