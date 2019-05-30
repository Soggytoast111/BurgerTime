var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    var burgerObj = burger.all()
    console.log("burgerObj in controllers!")
    console.log(burgerObj)
      res.render("index", burgerObj)
    })

  module.exports = router;