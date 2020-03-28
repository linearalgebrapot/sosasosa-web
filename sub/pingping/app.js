/**
 * app.js
 * 
 * https://sosasosa.dev/
 * 
 * @date 2020-03-29
 * @author bammer
 */

// import express modules
const express = require('express'),
      http = require('http');

// import to file download
var  fs = require('fs');

// create express object
var app = express();
// create main(non-sub-domained) router object
var router = express.Router();

// set the port as attr. of app obj.
// app.set('port', process.env.PORT || 3000);


router.route('/').get((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write(`<h1>Hello form Sundae!</h1><hr>`);
    res.write(`<a href='/downloads/'>Download server program</a>`);
    res.end();
});    

router.route('/downloads/').get((req, res) => {
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


// register router objs. to app obj.
app.use('/', router);
//app.use(subdomain('pingping', router));


http.createServer(app).listen(4000, function() {
    console.log(`EXPRESS: server is running on 4000 from pingping!`);
});

module.exports = app;
