var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//On pageload, grabs data from database and sents to client
//router.get("/", function(req, res) {
  //burger.init(function(burgerObj){
    //res.render("index", burgerObj)
  //})
//})

router.get("/", function(req, res) {
  burger.init(function(burgerObj){
    console.log("Here is BurgerOBJ inside Controllers.js:  ")
    console.log(burgerObj)
    res.render("index", burgerObj);
  })
  var hbsObject = [{
    id: 1,
    name: "TestBurgerSupreme",
    eaten: false
  }];
});


//Clicking the burger button in the ready column will mark as devoured in database and refresh the page
router.get("/api/eatBurger/:id", function(req,res){
  console.log(req.params.id)
  burger.eatBurger(req.params.id, function(result){
    console.log(result)
  })
  res.redirect("../../")
})

//Clicking the burger button in the eaten column will delete row in databse (destroy burger) and refresh the page
router.get("/api/destroyBurger/:id", function(req,res){
  console.log(req.params.id)
  burger.destroyBurger(req.params.id, function(result){
    console.log(result)
  })
  res.redirect("../../")
})

//Clicking Add Burger button takes data from form and updates database (create burger) and then refreshes the page
router.get("/api/createBurger/", function(req,res){
  burger.createBurger(req.query.name, req.query.eaten, function(result){
    console.log(result)
  })
  res.redirect("../../")
})

  module.exports = router;