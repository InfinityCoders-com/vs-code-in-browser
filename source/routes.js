var config = require("./routes/config");

module.exports = (req, res) => {
  switch (req.url) {
    case "/": {
      config(req, res);
    }
  }
};
