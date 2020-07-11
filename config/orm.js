const connection = require("./connection.js");


const orm = {
  selectAll: (tableInput,cb) => {
    // const querySelect = "SELECT * FROM ??"; [tableInput],
    var querySelect = "SELECT * FROM " + tableInput + ";";

    connection.query(querySelect, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

};

module.exports = orm;
