const express = require("express");
const morgan = require("morgan");
const multer = require('multer');
const cookieParser = require('cookie-parser')
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
const homeRouter = require("./routes/homeRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const accountRouter = require("./routes/accountRoutes");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static("node_modules"));
app.use(express.json());
app.use(multer().none())
app.use("/signup", accountRouter);
app.use("/api/transactions", transactionRouter)
// app.use("/", homeRouter);

module.exports = app;