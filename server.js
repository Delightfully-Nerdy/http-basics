const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resn) => {
    res.send('<h1>Hello from express1</h1>');
});

app.listen(5000, () => console.log('Server started on 5000'));