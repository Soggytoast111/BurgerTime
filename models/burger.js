// Import ORM
var orm = require("../config/orm.js");

//yum yum burger logic
var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(result){
      console.log("here is result:  ")
      console.log(result)
        var burgerArray = []
        for (i=0; i<result.length; i++){
          var obj = {
            id: result[i].id,
            name: result[i].burger_name,
            eaten: result[i].devoured
          }  
          burgerArray.push(obj)
        }
        console.log("here is burgerArray:  ")
        console.log(burgerArray)
        cb(burgerArray)
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