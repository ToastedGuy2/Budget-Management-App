const path = require("path");
exports.getIndex = (req, res) => {
  const absolutePath = path.resolve(`${__dirname}`, "../public", "rodolfo.html");
  res.sendFile(absolutePath);
};
