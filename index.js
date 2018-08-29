var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static('dist'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});