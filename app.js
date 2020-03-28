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
      subdomain = require('express-subdomain'),
      http = require('http');


// import to provide sub-domains
// const vhost = require('vhost'),
//       pingping = require('./sub/pingping/app');

// create express object
var app = express();
// set the port as attr. of app obj.
app.set('port', process.env.PORT || 3000);

var router = express.Router();

router.get('/', (req, res) => {
    res.send('pingping!');
});

router.get('/admin', (req, res) => {
    res.json([
        {name: "Bammer"}
    ]);
});

app.use(subdomain('pingping', router));

app.get('/', (req, res) => {
    res.send('Homepage!');
});
/*
// create main(non-sub-domained) router object
var router = express.Router();

router.route('/').get((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write(`<h1>Main page</h1><hr>`);
    res.write(`<a href='https://pingping.sosasosa.dev/'>Pingping App</a>`);
    res.end();
});
*/

//app.use(express.static('static'));

// register router objs. to app obj.
//app.use('/', router);


http.createServer(app).listen(app.get('port'), function() {
    console.log(`EXPRESS: server is running on ${app.get('port')}`);
});
