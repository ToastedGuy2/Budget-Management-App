const {
    check,
    body
} = require('express-validator');

exports.emptyFields = check(["firstName", "lastName", "email", "password", "passwordConfirmation"], "Field is required").notEmpty();
exports.validEmail = check("email", "Invalid Email").isEmail();
exports.equalPasswords = body("passwordConfirmation").custom((value, {
    req
}) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password')
    }
    return true;
})