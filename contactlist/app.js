//importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require("./routs/route");

//connnct o mongdb
mongoose.connect("mongodb://localhost:27017/contactlist");

//conncted
mongoose.connection.on("connected", () => {
  console.log("connected to database mongodb @27017");
});
mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("error message: " + err);
  }
});

//port no
const port = 3000;

//adding middleware
app.use(cors());

//body paser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api", route);

//testing server
app.get("/", (req, res) => {
  res.send("adoo yess bnbnbddc");
});

app.listen(port, () => {
  console.log("server is running : " + port);
});
