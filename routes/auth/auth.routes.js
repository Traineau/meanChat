/* 
Import & config
*/
// NodeJS
const express = require('express');
const authRouter = express.Router();

// Inner
const checkFields = require('../../services/request.checker');
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const { register, login } = require('./auth.ctrl');
//

/* 
Definition
*/
class AuthRouterClass {
    constructor() {}

    routes() {
        // Route USER register
        authRouter.post('/register', (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) {
                return sendBodyError(res, 'No body data provided');
            }
            // Check fields in the body
            const { ok, extra, miss } = checkFields(
                ['name', 'email', 'password'],
                req.body
            );
            //=> Error: bad fields
            if (!ok) {
                return sendFieldsError(res, 'Bad fields provided', miss, extra);
            }
            // Request is OK
            register(req.body)
                .then(apiRes =>
                    sendApiSuccessResponse(res, 'User is registrated', apiRes)
                )
                .catch(apiErr =>
                    sendApiErrorResponse(
                        res,
                        'Error during user registration',
                        apiErr
                    )
                );
        });

        // Delete
        authRouter.post('/login', (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.json({ msg: 'No body data provided', data: null });
            }

            // Check fields in the body
            const { ok, extra, miss } = checkFields(
                ['password', 'email'],
                req.body
            );

            //=> Error: bad fields provided
            if (!ok)
                res.json({
                    msg: 'Bad fields provided',
                    data: { miss: miss, extra: extra }
                });
            else {
                // Register new user
                login(req.body, res)
                    .then(apiResponse =>
                        res.json({ msg: 'User logged', data: apiResponse })
                    )
                    .catch(apiResponse =>
                        res.json({ msg: 'User not logged', data: apiResponse })
                    );
            }
        });
    }

    init() {
        this.routes();
        return authRouter;
    }
}
//

/* 
Export
*/
module.exports = AuthRouterClass;
//
