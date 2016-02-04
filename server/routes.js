'use strict'
var express=require('express');
var mongoose=require('mongoose');
module.exports = function(app) {

    // Prefixed api to easily understand routings
    app.use('/api/movies', require('./api/Movie'));
    //app.use('/api/users', require('./api/user'));
    //app.use('/api/students', require('./api/student'));

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);

            // render method refers view engine like ejs, json() will send json back
            res.json({
                message: err.message,
                error: err
            });
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json( {
            message: err.message,
            error: {}
        });
    });
}