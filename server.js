//Express Require
var express = require("express")
var app = express()

//Set Up Express
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

//Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes Require
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);
