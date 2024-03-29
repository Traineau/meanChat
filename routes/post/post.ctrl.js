/* 
Imports
*/
    // Template de controler    

    // Inner
    const PostModel = require('../../models/post.model');
//


/* 
Méthodes CRUD
*/
    const createItem = (body) => {
        return new Promise((resolve, reject) => {
            // Récupérer l'id de l'auteur
            body.author = 'fuuf'

            PostModel.create(body)
            .then(mongoResponse => resolve(mongoResponse))
            .catch(mongoResponse => reject(mongoResponse))
        })
    };

    const readItem = () => {

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
        updateItem,
        deleteItem
    }
//