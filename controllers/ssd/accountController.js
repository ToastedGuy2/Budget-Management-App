const pug = require('pug');
const {
    validationResult
} = require('express-validator');

const viewsPath = `${__dirname}/../../views`;
const User = require('../../models/userModel')
exports.getSignup = (req, res) => {
    const html = pug.renderFile(`${viewsPath}/signup.pug`);
    res.send(html);
}
exports.postSignup = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const validationErrors = errors.array().reduce((errorsObject, error) => {
                errorsObject[error.param] = {
                    message: error.msg,
                    value: error.value
                }
                return errorsObject
            }, {})
            return res.render("signup", validationErrors);
        }
        await User.create(req.body);
        res.send("User added it successfully")
        // res.redirect("/login")
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "SORRY: something gone wrong in the server when processing your request"
        })
        console.error(error);
    }

}