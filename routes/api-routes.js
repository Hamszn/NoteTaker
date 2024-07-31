const router = require('express').Router();
const { v4: uuid  } = require('uuid');
const fs = require("fs");

router.get('/api/notes', async (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(db.Json);
});

router.post('/api', async (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid()
  }; 
  dbJson.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson , null, 2));
 
});

router.delete('/api/notes/:id', async (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const index = dbJson.findIndex(note => note.id === req.params.id);
  if (index!== -1) {
    dbJson.splice(index, 1);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.status(204).end();
  } else {
    res.status(404).end();
  }
 });

module.exports = router;

