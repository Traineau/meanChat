/* 
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const jwt = require('jsonwebtoken');
//


/*
Config
*/
    const userSchema = new Schema({
        name: String,
        email: String,
        password: String
    }); 

    // Méthode
    userSchema.methods.generateJwt = function() {
        // set expiration
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        // JWT creation
        return jwt.sign({
            _id: this._id,
            name: this.name,
            password: this.password,
            email: this.email,
            expireIn: '10s',
            exp: parseInt(expiry.getTime() + 100, 10)
        }, process.env.JWT_SECRET);
    };
//


/* 
Export
*/
    const UserModel = mongoose.model('user', userSchema);
    module.exports = UserModel;
//