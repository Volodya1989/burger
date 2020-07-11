const orm = require("../config/orm.js");
const burgers = {
    selectAll: (cb) =>{
        orm.selectAll("burgers",(res)=>{
            cb(res)
        });
    },
    insertOne: (cb) => {},
////   EXAMPLE OF INSERT 
    // create: function(cols, vals, cb) {
    //     orm.create("cats", cols, vals, function(res) {
    //       cb(res);
    //     });
    //   },
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;