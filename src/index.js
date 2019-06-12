const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:root170415@cluster0-npfub.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

app.use(require('./routes'));

app.listen(3333);