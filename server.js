var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path')
const port = 8080 || process.env.PORT
server.listen(port, ()=> console.log(`Listening on ${port}`));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
io.on('connection', socket => {
 socket.on('startAgainstBot', ()=> {
   setTimeout(() => {
     socket.emit('loaded')
   }, 1500);
 })
});