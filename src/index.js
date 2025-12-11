const express = require('express');
const fs = require('fs');
const crud = express();
const port = 3000;
const notes = JSON.parse(fs.readFileSync("./src/data/db.json"));

crud.use(express.json());

crud.get("/", (req, res) => {
    res.send("NOTES UYGULAMASINA HOSGELDINIZ!!!");
});

crud.get("/notes", (req, res) => {
    if(notes.length == 0){
        res.status(400).send("Henuz not eklenmedi.");
    }
    res.send(notes);
});

crud.get("/notes/:id", (req, res) => {
    const note = notes.find(not => not.id == req.params.id);
    if(!note){
        return res.status(404).send("Aradiginiz not bulunamadi.");
    };

    res.send(note);
});

crud.post("/notes", (req, res) => {
    const note = {
        id : notes.length + 1,
        title : req.body.title,
        content : req.body.content
    }

    if(!note.title){
       return res.status(400).send("Bir baslik giriniz.");
    }

    notes.push(note);
    res.send(notes);
});

crud.put("/notes/:id", (req, res) => {
    const note = notes.find(not => not.id == req.params.id); 
    if(!note){
        return res.status(404).send("Aradiginiz not bulunamadi.");
    };

    if(req.body.title){
        note.title = req.body.title;
    }
    if(req.body.content){
        note.content = req.body.content;
    }

    res.send(note);
});

crud.delete("/notes/:id", (req, res) => {
    const note = notes.find(not => not.id == req.params.id); 
    if(!note){
        return res.status(404).send("Aradiginiz not bulunamadi.");
    };

    const noteIndex = notes.indexOf(note);
    notes.splice(noteIndex, 1);

    res.send(note);
});

crud.listen(port, () => {
    console.log("Notes Crud App Port " + port + "'de calisiyor.");
});