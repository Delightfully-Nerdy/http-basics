const express = require('express');
const path = require('path');
const send = require('send');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.delete('/post/:id', (req, res) => {
    //Database stuff

    res.json({ msg: `Post ${req.params.id} deleted`});

});


app.listen(5000, () => console.log('Server started on 5000'));