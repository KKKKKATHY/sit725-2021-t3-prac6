let express = require("express");
let app = express();

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let projectsRoute = require('./routes')

var port = process.env.PORT || 8080;
var res_back = null

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use("/api", projectsRoute)

app.get("/two", function(req, res) {
  console.log('-> server recv: two')
})

//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(port, ()=>{
  console.log("Server Listening on port ", port);
});
