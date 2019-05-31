var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(burgerObj){
    console.log("BurgerObj AGAIN!")
    console.log(burgerObj)
    res.render("index", burgerObj)
  })
})

  module.exports = router;