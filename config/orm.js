const connection = require("./connection.js");

const orm = {
  selectAll: (tableInput, cb) => {
    // const querySelect = "SELECT * FROM ??"; [tableInput],
    var querySelect = "SELECT * FROM " + tableInput + ";";

    connection.query(querySelect, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (table, cols, vals, cb) => {
    var queryInsert = `INSERT INTO ?? (??) VALUES (?) `;
    console.log(queryInsert);
    connection.query(queryInsert, [table,cols,vals], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // //   EXAMPLE OF INSERT
  //   create: function(table, cols, vals, cb) {
  //     var queryString = "INSERT INTO " + table;

  //     queryString += " (";
  //     queryString += cols.toString();
  //     queryString += ") ";
  //     queryString += "VALUES (";
  //     queryString += printQuestionMarks(vals.length);
  //     queryString += ") ";

  //     console.log(queryString);

  //     connection.query(queryString, vals, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  //   },

  updateOne: () => {},
};

module.exports = orm;
