const restaurantsModel = require("../model/restaurants.model");

exports.create = (req, res) => {
  req.body.forEach((element) => {
    const {
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo,
      cloudinaryImageId,
    } = element;

    const newRestaurant = new restaurantsModel({
      name,
      cuisines,
      avgRating,
      deliveryTime,
      costForTwo,
      cloudinaryImageId,
    });

    newRestaurant
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
  });
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;

  const keys = Object.keys(req.body);

  restaurantsModel
    .findByIdAndUpdate(_id, { deliveryTime: "10 min" })
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

exports.fetch = (req, res) => {
  restaurantsModel
    .find()
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

  restaurantsModel
    .findByIdAndDelete(id)
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
