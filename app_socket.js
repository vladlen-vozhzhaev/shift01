const {Server} = require('socket.io');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(express.static('public'))

// Обработка подключения
io.on('connection', socket => {
    console.log(`Новое подключение ${socket.id}`);

    socket.emit('welcome', 'Добро пожаловать');

    socket.on('message', data=>{
        console.log(`Новое сообщение от ${socket.id}: ${data}`);
        socket.broadcast.emit('broadcast', data);
        socket.emit('echo', data);
    });

    socket.on('disconnect', ()=>{
        console.log(`Клиент отключился`, socket.id);
    });
})

server.listen(3000);
