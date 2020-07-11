const connection = require("./connection.js");
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
    connection.query(queryInsert, [table, cols, vals], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: (table, cols, vals, cb) => {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(cols);
    queryString += " WHERE ";
    queryString += vals;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
