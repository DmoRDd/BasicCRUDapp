import express from 'express';
import fs from 'fs';
const crud = express();
const port = 3000;
const notes = JSON.parse(fs.readFileSync("./src/data/db.json"));

crud.use(express.json());

crud.get("/", (req, res) => {
    return res.status(200).send("NOTES UYGULAMASINA HOSGELDINIZ!!!");
});

crud.get("/notes", (req, res) => {
    if(notes.length == 0){
        res.status(400).send("Henuz not eklenmedi.");
    }
    return res.status(200).send(notes);
});

crud.get("/notes/:id", (req, res) => {
    
    try{
        
        const { id } = req.params;
        const note = notes.find(not => not.id == id);

        if(!note){
            throw new Error("Aradiginiz not bulunamadi...");
        };

        return res.status(200).send(note);
    }
    catch (err){
        return res.status(404).send(err.message);
    }  
});

crud.post("/notes", (req, res) => {
    try{
        const { title } = req.body;
        const { content } = req.body;
        const note = {
            id : notes.length + 1,
            title : title,
            content : content
        }

        if(!note.title){
            throw new Error("Aradiginiz not bulunamadi...");
        }

        notes.push(note);
        return res.status(200).send(notes);
    }
    catch(err){
        res.status(404).send(err.message);
    }
});

crud.put("/notes/:id", (req, res) => {
    try{
        const { id } = req.params;
        const { title } = req.body;
        const { content } = req.body;
        const note = notes.find(not => not.id == id); 
        if(!note){
            throw new Error("Aradiginiz not bulunamadi...")
        };

        if(req.body.title){
            note.title = title;
        }
        if(req.body.content){
            note.content = content;
        }

        return res.status(200).send(note);
    }
    catch(err){
        res.status(404).send(err.message);
    }
});

crud.delete("/notes/:id", (req, res) => {
    try{
        const { id } = req.params;
        const note = notes.find(not => not.id == id); 
        if(!note){
            throw new Error("Aradiginiz not bulunamadi...")    
        };

        const noteIndex = notes.indexOf(note);
        notes.splice(noteIndex, 1);

        return res.status(200).send(note);
    }
    catch(err){
        res.status(404).send(err.message);
    }
});

crud.listen(port, () => {
    console.log("Notes Crud App Port " + port + "'de calisiyor.");
});