var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) =>{
    console.log('utilisateur connecté !')
    socket.on('chat message', (msg) => {
        console.log('message: '+ JSON.stringify(msg));
        io.emit('chat message', msg)
    })
});

http.listen(3001, () =>{
    console.log('le serveur écoute sur le port : 3001')
});