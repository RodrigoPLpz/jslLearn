var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
    text: "Hola soy un mensaje",
    author: "Rodrigo P Lpz"
}];

app.use(express.static('public'));
app.use(ignoreFavicon);

io.on('connection',function(socket){
    console.log('Alguien se ha conectado con Sockets');
    socket.emit('messages', messages);

    socket.on ('new-messages',function(data){
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

server.listen(8080,function(){
    console.log("Servidos corriendo en http://localhost:8080");
});

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({nope: true});
    } else {
      next();
    }
  }