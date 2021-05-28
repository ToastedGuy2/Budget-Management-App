const express = require('express');
const {
    emptyFields,
    validEmail,
    equalPasswords
} = require('../Validations/Account/signUpValidations')
// const badRequest = require('../Validations/general');

const {
    getSignup,
    postSignup
} = require('../controllers/ssd/accountController')

const router = express.Router();

router.route("/")
    .get(getSignup)
    .post(emptyFields, validEmail, equalPasswords, postSignup);
module.exports = router;