const express = require('express');
const mongoose = require('mongoose');
const DraftData = require('./models/draftResults');
const cors = require('cors');
const app = express();

// middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// database connection
const dbURI = process.env.DB_URI

mongoose.set("strictQuery", false);
// new version of mongoose depricated these.
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

mongoose.connect(dbURI)
  .then((result) => app.listen(3000, '0.0.0.0'))
  .catch((err) => console.log(err));

app.post('/draftPick', (req, res) => {
    DraftData.create({
        pick: req.body.pick,
        position: req.body.position,
        name: req.body.name,
        draftee: req.body.draftee,
        team: req.body.team
    })
    res.status(200).json({status: 'success'})
})

app.get('/getResults', async (req, res) => {
    let data = await DraftData.find();
    res.json(data);
})