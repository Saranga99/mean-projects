//importing all needs
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//routing files
var index = require("./route/index");
var api = require("./route/api");

//port and express class object
var port = 4500;
var app = express();

//define the view engine and set the path for view files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./client/views"));

//register given templete engine callback function as extension
app.engine("html", require("ejs").renderFile);

//define staatic files location as images css and js files
app.use(express.static(path.join(__dirname, "./client")));

//define the middleware to parse the data from url request and requesy body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//define the  middleware to routing
app.use("/", index);
app.use("api", api);
app.use("*", index);

//runn the nide js server at server 3000
app.listen(port, () => {
  console.log("server starterd at port : " + port);
});
