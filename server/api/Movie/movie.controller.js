/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /objects              ->  index
 * POST    /objects              ->  create
 * GET     /objects/:id          ->  show
 * PUT     /objects/:id          ->  update
 * DELETE  /objects/:id          ->  destroy
 */

'use strict';
/* GET home page. */

var Movie = require('./moviemodel.js')

//exports.index = function(req, res, next) {
//  res.render('index', { Jeevan: 'Node' });
//}

exports.index = function(req, res, next) {
    Movie.find(function (err, result) {
        if (err) return next(err);
        res.json({objects:result})
        // res.json(todos);
    });
}

exports.create = function(req, res, next) {
    Movie.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}