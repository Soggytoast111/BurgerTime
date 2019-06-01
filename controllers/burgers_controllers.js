var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.init(function(burgerObj){
    res.render("index", burgerObj)
  })
})


router.get("/api/eatBurger/:id", function(req,res){
  console.log(req.params.id)
  burger.eatBurger(req.params.id, function(result){
    console.log(result)
  })
  res.redirect("../../")
})
  module.exports = router;