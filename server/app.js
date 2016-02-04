'use strict';

var express = require('express');
var mongoose = require('mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var config = require('./config/environment/'+process.env.NODE_ENV)


var app = express();

// All express configuaration
require('./config/express')(app);

//All routes
require('./routes')(app);

//Db Connectivity
mongoose.connect(config.mongo, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('MongoDB connected to ',config.mongo);
        app.listen(config.port,config.ip,function(){
            console.log("Server running at http://%s:%s",config.ip,config.port)
        })
    }
});



module.exports = app;
