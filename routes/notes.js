var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// Set connection to MongoDB
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Use cors middleware
router.use(cors());

router.get('/', async (req, res) => {
// Set database and collection
const database = client.db('notes');
const notes = database.collection('notes');

// get document that id is 1
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})
module.exports = router;