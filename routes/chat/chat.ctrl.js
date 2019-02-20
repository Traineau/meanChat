/* 
Imports
*/
    // Inner
    const ChatModel = require('../../models/chat.model');
//


/* 
Méthodes CRUD
*/
    const createItem = (body) => {
        return new Promise( (resolve, reject) => {
            ChatModel.create(body)
            .then(mongoResponse => resolve(mongoResponse))
            .catch(mongoResponse => reject(mongoResponse))
        });
    };

    const readItem = () => {
        return new Promise( (resolve, reject) => {
            
        });
    }

    const updateItem = () => {
        return new Promise( (resolve, reject) => {
            
        });
    }

    const deleteItem = () => {
        return new Promise( (resolve, reject) => {
            
        });
    }
//

/* 
Exports
*/
    module.exports = {
        createItem,
        readItem,
        updateItem,
        deleteItem
    }
//