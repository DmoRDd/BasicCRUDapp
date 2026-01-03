const services = require('../services/notes.service.js');

const mainPage = (req, res) => {
    return res.status(200).send("NOTES APP");
}


const getNotesAll = (req, res) => {
    const notes = services.getNotes();

    if(notes.length === 0)
        return res.status(400).send("Henuz not eklenmedi...");

    return res.status(200).send(notes);
}


const getNotesById = (req, res) => {
    try{
        const { id } = req.params;
        const note = services.getNoteById(id);
        return res.status(200).send(note);
    }
    catch(err){
        return res.status(404).send(err.message);
    }
}


const addNotes = (req, res) => {
    try{
        const {title, content} = req.body;
        const note = services.addNote(title, content);
        return res.status(200).send(note);
    }
    catch(err){
        return res.status(400).send(err.message);
    }
}


const updateNotes = (req, res) => {
    try{
        const { id } = req.params;
        const { title, content } = req.body;
        const note = services.updateNote(id, title, content);
        return res.status(200).send(note);
    }
    catch(err){
        return res.status(404).send(err.message);
    }
}


const deleteNotes = (req, res) => {
    try{
        const { id } = req.params;
        const note = services.deleteNote(id);
        return res.status(200).send(note);
    }
    catch(err){
        return res.status(400).send(err.message);
    }
}

module.exports = {mainPage, getNotesAll, getNotesById, addNotes, updateNotes, deleteNotes};