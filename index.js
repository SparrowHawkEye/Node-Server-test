const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//* Usage of cors(Cross Origin) Middleware

const cors = require("cors");
app.use(cors());

//* Usage of express.json (instead of body-parser)
app.use(express.json());

//* Home Page Route

app.get("/", (req, res) => {
  res.send("Hello from Smarty Node!! 🤠");
});

//* Users page Route

const users = [
  { id: 1, name: "Mizan", email: "mizan@gmail.com", phone: "01718000001" },
  { id: 2, name: "Zohad", email: "zohad@gmail.com", phone: "01718000002" },
  { id: 3, name: "Sumon", email: "sumon@gmail.com", phone: "01718000003" },
  { id: 4, name: "Rafa", email: "rafa@gmail.com", phone: "01718000004" },
  { id: 5, name: "Sakib", email: "sakibd@gmail.com", phone: "01718000005" },
  { id: 6, name: "Shuddo", email: "shuddo@gmail.com", phone: "01718000006" },
  { id: 7, name: "Tuhin", email: "tuhin@gmail.com", phone: "01718000007" },
];
app.get("/users", (req, res) => {
  //* Filter by search query parameter
  // console.log('Query',req.query);
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

//* Route using 'params'

app.get("/user/:id", (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

//* POST to server from client side

app.post("/user", (req, res) => {
  // console.log("From Request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

//* Listening to PORT

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
