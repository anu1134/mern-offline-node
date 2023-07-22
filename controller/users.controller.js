const usersModel = require("../model/users.model");

exports.create = (req, res) => {
  console.log("request.....", req);
  const name = req.body.name;
  const age = req.body.age;

  const newUser = new usersModel({
    name,
    age,
  });

  newUser
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);

  if (!user) {
    res.status(404).json({ message: "User does not exist" });
  }

  const filteredUsers = users.filter((user) => user.id != id);

  res.json(filteredUsers);
};
