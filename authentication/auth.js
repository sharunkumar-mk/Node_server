var jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader == undefined) {
    res.status(401).send({ error: "no token" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, "skey", (err, decoded) => {
    if (err) {
      res.status(500).send({ error: "authentication failed" });
    }
    next();
  });
};
