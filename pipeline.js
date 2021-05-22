const express = require("express");
const morgan = require("morgan");
const app = express();
const homeRouter = require("./routes/homeRoutes");

app.use(morgan("dev"));
app.use(express.static("public"));
// app.use("/", homeRouter);
// app.get("/", (req, res) => {
//   res.sendFile("/index.html");
// });

module.exports = app;
