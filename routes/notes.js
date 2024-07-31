const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(db.Json);
});

router.post('/', async (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  };
  dbJson.notes.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson, null, 2));
});

module.exports = router;

