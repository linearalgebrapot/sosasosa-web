/**
 * app.js
 * 
 * https://sosasosa.dev/
 * 
 * @date 2020-03-05
 * @author bammer
 */

 // import express modules
 const express = require('express'),
       http = require('http');

// create express object
var app = express();

// set the port as attr. of app obj.
app.set('port', process.env.PORT || 3000);

app.get("/", (req, res) => res.send('Hello LinearAlgebra Pot!'));

http.createServer(app).listen(app.get('port'), function() {
    console.log(`EXPRESS: server is running on ${app.get('port')}`);  
});
