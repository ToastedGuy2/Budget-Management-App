const dotenv = require("dotenv");
const mongoose = require('mongoose');
const app = require("./pipeline");

dotenv.config({
    path: `${__dirname}/config.env`
});
const connection_string = process.env.CONNECTION_STRING.replace('<password>', process.env.PASSWORD);
mongoose
    .connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .catch((error) => console.log(`ERROR: ${error}`));

const port = process.env.PORT || 3000;

app.listen(port);