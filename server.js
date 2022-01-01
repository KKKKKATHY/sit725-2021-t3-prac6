let express = require("express");
let dbo = require("./db/conn");
let app = express();

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let projectroute = require("./routes/projects");
let studentroute = require("./routes/students");






var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/api/projects', projectRoute);
app.use('/api/students', studentRoute);

app.get("/addNumber/:n1/:2", function(request, response){
  let n1 = parseInt(request.params.n1);
  let n2 = parseInt(request.params.n2);
  let result = n1 + n2 || null;
  if (result == null){
      response.status(400).json({sendStatus:400, err:'Both input should be a number'})
  }
  response.json({sendStatus:200, result: result});
});

//app.get("/test", function (request, response) {
  //var user_name = request.query.user_name;
  //response.end("Hello " + user_name + "!");
//});


//let id = 1;

//const projects = [
 // {
   // id: id,
   // title: "project" + id,
   // info:`This is my work ${id} I am crated`,
   // img: null,
 // },
 // {
  //  id: ++id,
  //  title: "project" + id,
  //  info:`TThis is my work ${id} I am crated`,
  //  img: null,
  //},
  //{
   // id: ++id,
   // title: "project" + id,
   // info:`This is my work ${id} I am crating here`,
   // img: null,
 // },

//]



//app.get("/projects", function (request, response) {
  //dbo.getDb.collection('projects').find({}).toArray(function(err, res){
   // if (err)
     // throw err
    //response.send(res)
 // });
 // response.json();
//});

//app.post("/projects", function (request, response) {
  //add some validation logic
 // const project = request.body;
 // console.log(JSON.stringify(project));
 // if(project){
   // projects.push(project);

  
 //}else{
   //   response.sendStatus(500);
  //}
 // response.sendStatus(204);
//});





//socket test
//io.on('connection', (socket) => {
   // console.log('a user connected');
    //socket.on('disconnect', () => {
     // console.log('user disconnected');
  //  });
   // setInterval(()=>{
      //socket.emit('number', parseInt(Math.random()*10));
  //  }, 1000);
  
 // });


dbo.connectToDatabase(function(err){
  if(err){
    console.error(err);
    process.exit();
  }

  http.listen(port,()=>{
    console.log("Listening on port ", port);
  });

});


//this is only needed for Cloud foundry 
//require("cf-deployment-tracker-client").track();
