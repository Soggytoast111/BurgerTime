// Import ORM
var orm = require("../config/orm.js");

//yum yum burger logic
var burger = {
  all: function() {
    orm.selectAll("burgers", function(result){
        var burgerArray = []
        for (i=0; i<result.length; i++){
            burgerArray.push(result[i].burger_name)
        }
        var burgerObj = {
            "burger": burgerArray
        }
        console.log("here is burgerObj:  ")
        console.log(burgerObj)
        return burgerObj
    })
  },
  createBurger: function(burgerVal) {
    orm.insert("burgers", "burger_name", "devoured", burgerVal, 0, function(result){

    });
  },
  eatBurger: function(id) {
    orm.update("burgers", "devoured", 1, "id", id, function(result){
     
    });
  }
};

// Export this
module.exports = burger;