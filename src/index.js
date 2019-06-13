const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//Configurando o servidor para suportar conexão rest e web socket
const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect('mongodb+srv://root:root170415@cluster0-npfub.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

//Configurando a aplicação para que todos os usuarios receba as novas informações
app.use((req,res,next) => {
    req.io = io;
    next();
})

app.use(cors());

//Definindo as rotas da aplicação
app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));

app.use(require('./routes'));

server.listen(3333);