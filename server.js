const express = require('express');
const path = require('path');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');
const app = module.exports = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended : true, limit : '50mb'}));
app.use(express.static(__dirname + '/dist'));

var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function () {
    console.log("server starting on " + appEnv.url);
  });
  