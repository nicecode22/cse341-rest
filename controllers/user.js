const {validtionResult} = require('express-validator/check');

const User = require('../models/user');

exports.signup = (req, res, next) => {
    const errors = validtionResult(req);
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
}