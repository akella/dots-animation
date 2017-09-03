const express = require('express')
const app = express()


var http = require('http').Server(app);
var port = process.env.PORT || 3000;

// app.use(express.static('img'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendFile( __dirname + req.params[0]); 
});


http.listen(port, function(){
  console.log('listening on localhost:' + port);
});

