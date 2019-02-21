/* 
Import
*/

// Template de model mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;
//


/*
Config
*/
const postSchema = new Schema({
    title: String,
    content: String,
    author: String
}); 

/* 
Export
*/
const PostModel = mongoose.model('post', postSchema);
module.exports = PostModel;
//