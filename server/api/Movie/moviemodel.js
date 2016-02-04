/**
 * Created by Chethan H R on 04-Feb-16.
 */
'use strict';

var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    title: String,
    posters: String,
    released_on: String,
    actors: String,
    director: String,
    movietype:String
})

module.exports = mongoose.model('Movie', MovieSchema);

