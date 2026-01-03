const express = require('express');
const routes = require('./routes/notes.routes.js');
const port = 3000;
const crud = express();


crud.use(express.json());
crud.use("/", routes);


crud.listen(port, () => {
    console.log("Notes Crud App Port " + port + "'de calisiyor.");
});