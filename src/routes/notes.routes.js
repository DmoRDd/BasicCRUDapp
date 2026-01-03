const express = require('express');
const controllers = require('../controllers/notes.controller');

const router = express.Router();

router.get("/", controllers.mainPage);

router.get("/notes", controllers.getNotesAll);

router.get("/notes/:id", controllers.getNotesById);

router.post("/notes", controllers.addNotes);

router.put("/notes/:id", controllers.updateNotes);

router.delete("/notes/:id", controllers.deleteNotes);

module.exports = router;