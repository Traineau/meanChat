/* 
Import & config
*/
const express = require('express');
const messageRouter = express.Router();
const checkFields = require('../../services/request.checker');
const { createItem, readItem, readAllItems, updateItem, deleteItem } = require('./message.ctrl');
//

/* 
Definition
*/
class MessageRouterClass {
    constructor(){}

    routes(){
        // Create
        messageRouter.post( '/', (req, res) => {            
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { 
                return res.json( { msg: 'No body data provided', data: null } )
            }
            
            // Check fields in the body
            const { ok, extra, miss } = checkFields( [ 'author', 'content' ], req.body )

            //=> Error: bad fields provided
            if( !ok ) res.json( { msg: 'Bad fields provided', data: { miss: miss, extra: extra } } )
            else{
                // Create new message
                createItem(req.body)
                .then( apiResponse => res.json( { msg: 'Message send', data: apiResponse } ) )
                .catch(apiResponse => res.json( { msg: 'Message not send', data: apiResponse } ) );
            }
        })

        // Read messages
        messageRouter.get( '/', (req, res) => {
            res.json( { msg: "Read Message" } )
        })


        // Read all messages
        messageRouter.get( '/all', (req, res) => {
            readAllItems(res)
            .then( apiResponse => res.json( { msg: 'Messages found', data: apiResponse } ) )
            .catch(apiResponse => res.json( { msg: 'Messages not found', data: apiResponse } ) );
        })

        // Update
        messageRouter.put( '/', (req, res) => {
            res.json( { msg: "Update Message" } )
        })

        // Delete
        messageRouter.delete( '/', (req, res) => {
            res.json( { msg: "Delete Message" } )
        })
    }

    init(){
        this.routes();
        return messageRouter;
    }
}
//

/* 
Export
*/
module.exports = MessageRouterClass;
//