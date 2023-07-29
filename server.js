const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://anshii03:Geeks123@cluster0.kx0onpq.mongodb.net/"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting to DB");
});

db.on("open", () => {
  console.log("DB connection sucessful");
});

app.use(bodyParser.json());

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});

require(path.join(__dirname, "./Routes/users.routes"))(app);
require(path.join(__dirname, "./Routes/restaurants.routes"))(app);

require("./Routes/users-auth.routes")(app);

// const users = [
//   {
//     id: 1,
//     name: "ankit",
//     age: "23",
//   },
//   {
//     id: 2,
//     name: "ankita",
//     age: "24",
//   },
//   {
//     id: 3,
//     name: "an",
//     age: "23",
//   },
//   {
//     id: 4,
//     name: "ankit",
//     age: "28",
//   },
// ];

// // GET Request
// app.get("/", (req, res) => {
//   res.send("Learning Node JS 1111");
// });

// // CRUD

// // Create a user ----- POST
// // Get a user ------ GET
// // Update a user ------- PUT
// // Delete a user ------ DELETE

// // GET request to return all users

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // GET request to return a user with one particular id

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;

//   console.log("id", id);

//   const user = users.find((user) => user.id == id);

//   console.log(user);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   res.json(user);
// });

// // Create a new user

// // post

// // app.post("/api/user", (req, res) => {
// //   const name = req.body.name;
// //   const age = req.body.age;

// //   const user = {
// //     id: Math.random() * 10000,
// //     name: name,
// //     age: age,
// //   };

// //   users.push(user);

// //   res.json(users);
// // });

// // Update a user by id

// app.put("/api/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: " User does not exist" });
//   }

//   const keys = Object.keys(req.body);

//   keys.forEach((key) => {
//     if (!user[key]) {
//       res.status(404).end({ message: "Invalid key" });
//     }
//   });

//   keys.forEach((key) => {
//     user[key] = req.body[key];
//   });

//   res.json(users);
// });

// // Delete a user

// app.delete("/api/user/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({ message: "User does not exist" });
//   }

//   const filteredUsers = users.filter((user) => user.id != id);

//   res.json(filteredUsers);
// });

//mvc architecture
// mongo db
