/* 
Imports
*/    
    // Inner
    const MessageModel = require('../../models/message.model');
//


/* 
Méthodes CRUD
*/
    const createItem = (body) => {
        return new Promise((resolve, reject) => {
            body.date = Date.now();
            MessageModel.create(body)
            .then(mongoResponse => resolve(mongoResponse))
            .catch(mongoResponse => reject(mongoResponse))
        })
    };

    const readItem = () => {

    }

    const readAllItems = ( res ) => {
        return new Promise( ( resolve,reject ) => {
            // Listing all existing users
            MessageModel.find( function(error, messages) {
                if(error) return reject(error) // Mongo Error
                else if(!messages) return reject('Messages not found')
                else{
                    return resolve(messages);
                } 
            });
        })
    }

    const updateItem = () => {

    }

    const deleteItem = () => {

    }
//

/* 
Exports
*/
    module.exports = {
        createItem,
        readItem,
        readAllItems,
        updateItem,
        deleteItem
    }
//