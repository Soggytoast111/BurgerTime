// Import ORM
var orm = require("../config/orm.js");

//Interact with ORM to perform database operations with some logic for our burger app
var burger = {
  init: function(cb) {
    orm.selectAll("burgers", function(result){
        var burgerArray = []
        for (i=0; i<result.length; i++){
          var obj = {
            id: result[i].id,
            name: result[i].burger_name,
            eaten: result[i].devoured
          }  
          burgerArray.push(obj)
        }
        cb(burgerArray)
    })
  },
  createBurger: function(burgerVal, devoured, cb) {
    orm.insert("burgers", "burger_name", "devoured", burgerVal, devoured, function(result){
      cb(result)
    });
  },
  eatBurger: function(id, cb) {
    orm.update("burgers", "devoured", 1, "id", id, function(result){
      cb(result)
    });
  },
  destroyBurger: function(id, cb) {
    orm.delete("burgers", "id", id, function(result) {
      cb(result)
    })
  }
};

// Export this
module.exports = burger;