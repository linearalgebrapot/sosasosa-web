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

// import to file download
var  fs = require('fs');


// create express object
var app = express();
// create new router object
var router = express.Router();


// set the port as attr. of app obj.
app.set('port', process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write(`<h1>Hello form Sundae!</h1><hr>`);
    res.write(`<a href='/downloads/'>Download server program</a>`);
    res.end();
});

app.get("/downloads/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write(`<h2>Download server program!</h2><hr>`);
    res.write(`<a href='/downloads/pingping-windows/'>Download</a>`);
    res.end();
});

router.route('/downloads/pingping-windows/').get((req, res) => {
    var file = fs.createReadStream('./public/pingping_windows.exe');
    res.writeHead(200, {'Content-disposition': 'attachment; filename=pingping_windows.exe'});
    file.pipe(res);
});

// register a router obj. to app obj.
app.use('/', router);


http.createServer(app).listen(app.get('port'), function() {
    console.log(`EXPRESS: server is running on ${app.get('port')}`);
});
