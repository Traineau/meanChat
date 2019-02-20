/* 
Import & config
*/
const { Router } = require('express');
const chatRouter = Router({ mergeParams: true });
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const checkFields = require('../../services/request.checker');
const { createItem, readItem, updateItem, deleteItem } = require('./chat.ctrl')
//

/* 
Definition
*/
class ChatRouterClass {
    constructor({ passport }) {
        this.passport = passport;
    }

    routes(){
        // Create
        chatRouter.post( '/',this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { ok, extra, miss } = checkFields(['name' , 'email', 'password'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            // Request is OK
            createItem(req.body)
            .then( apiRes =>  sendApiSuccessResponse(res, 'User is registrated', apiRes))
            .catch( apiErr => sendApiErrorResponse(res, 'Error during user registration', apiErr));
            // req.user._id
            res.json( { msg: "Create chat", req: req.user } )
        })

        // Read
        chatRouter.get( '/', (req, res) => {
            res.json( { msg: "Read Post" } )
        })

        // Update
        chatRouter.put( '/', (req, res) => {
            res.json( { msg: "Update Post" } )
        })

        // Delete
        chatRouter.delete( '/', (req, res) => {
            res.json( { msg: "Delete Post" } )
        })
    }

    init(){
        this.routes();
        return chatRouter;
    }
}
//

/* 
Export
*/
module.exports = ChatRouterClass;
//