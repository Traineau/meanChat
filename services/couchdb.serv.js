/* 
Imports
*/
const nano = require('nano')(process.env.COUCHDB_URL);
//

/*
Config
*/
//
const couchDbConnect = () => {
    return new Promise((resolve, reject) => {
        nano.db.create('node-chat')
        .then( couchDb => resolve( process.env.COUCHDB_URL) )
        .catch( err => err.statusCode == 412 ? resolve( process.env.COUCHDB_URL ) : reject(err) )
    });
};

/*
Export
*/
module.exports = couchDbConnect;
//