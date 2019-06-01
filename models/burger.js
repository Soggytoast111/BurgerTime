// Import ORM
var orm = require("../config/orm.js");

//yum yum burger logic
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
  createBurger: function(cb) {
    orm.insert("burgers", "burger_name", "devoured", burgerVal, 0, function(result){

    });
  },
  eatBurger: function(id, cb) {
    orm.update("burgers", "devoured", 1, "id", id, function(result){
    cb(result)
    });
  }
};

// Export this
module.exports = burger;