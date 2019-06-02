var connection = require("./connection.js");
//ORM to interact with SQL Database
var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM ??";
      console.log("queryString = " + queryString);
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
        });
    },
    insert: function(table, col1, col2, val1, val2, cb) {
      var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);"
        console.log("queryString = " + queryString)
    connection.query(queryString, [table, col1, col2, val1, val2], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
        });
    },
    update: function(table, col1, val1, id, idVal, cb) {
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;"
      connection.query(queryString, [table, col1, val1, id, idVal], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
        });
    },
    delete: function(table, id, idVal, cb) {
      var queryString = "DELETE FROM ?? WHERE ?? = ?;"
      connection.query(queryString, [table, id, idVal], function(err, result){
        if (err) throw err;
        console.log(result);
        cb(result)
      })
    }
  };
  
  module.exports = orm;