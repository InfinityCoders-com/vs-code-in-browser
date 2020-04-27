module.exports = (req, res) => {
  if (req.method === "GET") {
    res.write("Hi Get!");
    res.end();
  } else if (req.method === "POST") {
    res.write("Hi Post!");
    res.end();
  } else if (req.method === "PUT") {
    res.write("Hi Put!");
    res.end();
  } else if (req.method === "PATCH") {
    res.write("Hi Patch!");
    res.end();
  } else if (req.method === "DELETE") {
    res.write("Hi Delete!");
    res.end();
  }
};
