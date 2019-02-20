/* 
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//


/*
Config
*/
const chatSchema = new Schema({
    name: String,
    users: [String]
}); 

/* 
Export
*/
const ChatModel = mongoose.model('chat', chatSchema);
module.exports = ChatModel;
//