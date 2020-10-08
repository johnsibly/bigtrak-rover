var app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/phone.html');
});

io.on('connection', function(socket){

  console.log('a client connected');

  socket.on('move', function (msg) {
    console.log('move on server' + msg);
    // socket.broadcast.emit('move', msg);
    // socket.emit('move', msg);
    io.emit('move', msg);
  });

  socket.on('stop', function () {
    // socket.broadcast.emit('stop');
    // socket.emit('stop');
    io.emit('stop');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
