const express = require("express");
const morgan = require("morgan");
const app = express();
const homeRouter = require("./routes/homeRoutes");
const transactionRouter = require("./routes/transactionRoutes");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json())
app.use("/api/transactions", transactionRouter)
// app.use("/", homeRouter);

module.exports = app;